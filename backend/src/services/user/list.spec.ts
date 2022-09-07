import { User } from "../../models/user";
import { RAW_USER } from "../../test/fixtures/user";
import { list } from "./list";

describe("list", () => {
  it("should successfully list users", async () => {
    const findSpy = jest.spyOn(User, "find").mockImplementation(
      () =>
        ({
          populate: jest.fn().mockResolvedValue([RAW_USER]),
        } as any)
    );

    const users = await list();

    expect(users.length).toEqual(1);
    expect(users[0]).toEqual(RAW_USER);

    expect(findSpy).toHaveBeenCalledWith({});
    expect(findSpy).toHaveBeenCalledTimes(1);
  });
});
