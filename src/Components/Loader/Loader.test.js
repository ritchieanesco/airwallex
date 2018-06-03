import React from "react";
import renderer from "react-test-renderer";
import Loader from "./Loader";

describe("Loader", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Loader size={28} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
