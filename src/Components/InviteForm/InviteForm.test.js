import React from "react";
import renderer from "react-test-renderer";
import InviteForm from "./InviteForm";

describe("InviteForm", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<InviteForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
