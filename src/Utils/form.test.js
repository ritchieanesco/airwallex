import { emailValidation, nameValidation, isSame } from "./form";

describe("Form Util", () => {
  describe("emailValidation", () => {
    it("should validate correct email format", () => {
      expect(emailValidation("test@test.com")).toBeTruthy();
    });
    it("should validate incorrect email format", () => {
      expect(emailValidation("test")).toBeFalsy();
      expect(emailValidation("")).toBeFalsy();
    });
  });
  describe("nameValidation", () => {
    it("should validate correct name", () => {
      expect(nameValidation("test")).toBeFalsy();
    });
    it("should validate correct", () => {
      expect(nameValidation("te")).toBeTruthy();
    });
  });
  describe("isSame", () => {
    it("should check for duplicate arguments", () => {
      expect(isSame("test", "test")).toBeTruthy();
      expect(isSame("te", "test")).toBeFalsy();
    });
  });
});
