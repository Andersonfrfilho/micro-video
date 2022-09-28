import InvalidUuidError from "@seedwork/errors/invalid-uuid-error";
import { v4, validate } from "uuid";

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || v4();
  }

  private validate() {
    const isValid = validate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
