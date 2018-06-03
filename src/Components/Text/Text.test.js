import React from "react";
import renderer from "react-test-renderer";
import Text from "./Text";

describe("Footer", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<Text variant="display3">A better way to enjoy every day</Text>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
