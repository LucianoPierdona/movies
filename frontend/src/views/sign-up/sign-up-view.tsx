import React, { ReactElement } from "react";
import { Row, Col } from "react-styled-flexboxgrid";

import Menu from "../shared/components/menu";
import { H1 } from "../layout/layout.styles";

import { HookData } from "./use-sign-up";
import {
  Wrapper,
  Form,
  Input,
  InputFile,
  Button,
  Droparea,
  ClearButton,
  Preview,
  Img,
  Label,
  Select,
} from "./sign-up.styles";

const SignUpView: React.FC<HookData> = ({
  movies,
  sitRows,
  sitPlaces,
  data,
  handleChangeData,
  handleChangeMovieId,
  handleChangeSitPlace,
  handleChangeSitRow,
  handleClearAvatar,
  handleChangeAvatar,
  handleSubmit,
}): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <Form onSubmit={handleSubmit}>
        <Row center="xs">
          <Col xs={12} md={4}>
            <H1>Sign up for a movie</H1>

            <Label>First name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First name"
              value={data.firstName}
              onChange={(e) => handleChangeData("firstName", e.target.value)}
              required
            />
            <Label>Last name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last name"
              value={data.lastName}
              onChange={(e) => handleChangeData("lastName", e.target.value)}
              required
            />
            <Label>Avatar</Label>
            <div>
              <InputFile
                id="avatar"
                type="file"
                placeholder="Avatar"
                onChange={handleChangeAvatar}
              />
            </div>

            {data.avatarBase64 && (
              <Droparea>
                <Preview id="preview">
                  {" "}
                  <Img src={data.avatarBase64} />{" "}
                </Preview>
                <ClearButton id="clear" onClick={handleClearAvatar}>
                  Clear
                </ClearButton>
              </Droparea>
            )}

            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => handleChangeData("email", e.target.value)}
              required
            />
            <Label>Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone"
              value={data.phone}
              onChange={(e) => handleChangeData("phone", e.target.value)}
              required
            />
            <Label>Movie</Label>
            <Select
              id="movie"
              onChange={(e) => handleChangeMovieId(e.currentTarget.value)}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </Select>
            <Select
              id="row"
              onChange={(e) => handleChangeSitRow(e.currentTarget.value)}
            >
              {sitRows.map((row) => (
                <option key={row} value={row}>
                  {row}
                </option>
              ))}
            </Select>
            <Select
              id="seat"
              onChange={(e) => handleChangeSitPlace(e.currentTarget.value)}
            >
              {sitPlaces.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </Select>
            <Button type="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default SignUpView;
