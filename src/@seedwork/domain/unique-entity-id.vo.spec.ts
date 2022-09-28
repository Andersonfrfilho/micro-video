import InvalidUuidError from "@seedwork/errors/invalid-uuid-error";
import { validate } from "uuid";
import UniqueEntityId from "./unique-entity-id.vo";

describe("UniqueEntityId Unit Tests", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

  beforeEach(() => {
    validateSpy.mockClear();
  });
  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("faker-id")).toThrow(
      new InvalidUuidError()
    );
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const uuid = "a5c10d12-110e-43bc-af56-7552bdc94bcb";
    const vo: UniqueEntityId = new UniqueEntityId(uuid);

    expect(vo.id).toBe(uuid);
    expect(validateSpy).toBeCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const uuid = "a5c10d12-110e-43bc-af56-7552bdc94bcb";
    const vo: UniqueEntityId = new UniqueEntityId(uuid);

    expect(validate(vo.id)).toBeTruthy();
    expect(validateSpy).toBeCalled();
  });
});
