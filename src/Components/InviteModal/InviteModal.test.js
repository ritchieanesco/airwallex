import React from "react";
import renderer from "react-test-renderer";
import InviteModal from "./InviteModal";

describe("InviteModal", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<InviteModal open={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
