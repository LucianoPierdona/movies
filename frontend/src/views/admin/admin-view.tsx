import React, { ReactElement } from "react";
import { Row, Col } from "react-styled-flexboxgrid";

import Menu from "../shared/components/menu";
import { H1 } from "../layout/layout.styles";

import { HookData } from "./use-admin";
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from "./admin.styles";

const AdminView: React.FC<HookData> = ({ users }): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <H1>Users</H1>

      {users.length > 0 ? (
        <Row center="xs">
          <Col>
            <Table cellPadding="0" cellSpacing="0">
              <Thead>
                <Tr>
                  <Th>First name</Th>
                  <Th>Last name</Th>
                  <Th>Avatar</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Selected movie</Th>
                  <Th>Cinema session date</Th>
                  <Th>Row number</Th>
                  <Th>Seat number</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr key={user._id}>
                    <Td>{user.firstName}</Td>
                    <Td>{user.lastName}</Td>
                    <Td>
                      <img alt={user.email} src={user.avatarBase64} />
                    </Td>
                    <Td>{user.email}</Td>
                    <Td>{user.phone}</Td>
                    <Td>{user.movie?.title ?? ""}</Td>
                    <Td>
                      {user.movie?.startDate
                        ? user.movie.startDate.toString().slice(0, 10)
                        : ""}
                    </Td>
                    <Td>{user.sitRow ?? ""}</Td>
                    <Td>{user.sitPlace ?? ""}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Col>
        </Row>
      ) : (
        <div>No users yet.</div>
      )}
    </Wrapper>
  );
};

export default AdminView;
