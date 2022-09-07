import { RAW_USER, USER } from "../../../test/fixtures/user";
import { formatUser } from "./format-user";

describe("formatUser", () => {
  it("should format a user", () => {
    const fomattedUser = formatUser(RAW_USER as any);

    expect(fomattedUser).toEqual(USER);
  });
});
