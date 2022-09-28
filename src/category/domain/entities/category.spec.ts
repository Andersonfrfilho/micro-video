import { Category, CategoryProperties } from "./category";
import { omit } from "lodash";
import { validate } from "uuid";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    // ARRANGE
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "createdAt");

    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      isActive: true,
    });
    expect(category.props.createdAt).toBeInstanceOf(Date);

    // ACT
    category = new Category({
      name: "Movie",
      description: "Some description",
      isActive: false,
    });
    let createdAt = new Date();

    // ASSERT
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Some description",
      isActive: false,
      createdAt,
    });

    category = new Category({
      name: "Movie",
      description: "Some description",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Some description",
    });

    category = new Category({
      name: "Movie",
      isActive: true,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      isActive: true,
    });

    createdAt = new Date();
    category = new Category({
      name: "Movie",
      isActive: false,
      createdAt,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      createdAt,
    });
  });

  test("if field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.id).not.toBeNull();
    expect(validate(category.id)).toBeTruthy();
  });

  test("if field", () => {
    const category = new Category(
      { name: "Movie" },
      "6d5371a3-109a-4876-a060-122c9d348c9a"
    );
    expect(category.id).not.toBeNull();
    expect(validate(category.id)).toBeTruthy();
  });

  test("getters of name field", () => {
    // ARRANGE
    const category = new Category({
      name: "Movie",
    });
    expect(category.name).toBe("Movie");
  });

  test("getters and setter of description field", () => {
    // ARRANGE
    let category = new Category({
      name: "Movie",
    });
    expect(category.description).toBe(null);

    category = new Category({
      name: "Movie",
      description: "Some description",
    });
    expect(category.description).toBe("Some description");

    category = new Category({
      name: "Movie",
    });

    category["description"] = "other description";
    expect(category.description).toBe("other description");

    category["description"] = undefined;
    expect(category.description).toBeNull();

    category["description"] = null;
    expect(category.description).toBeNull();
  });

  test("getters and setter of tags field", () => {
    // ARRANGE
    let category = new Category({
      name: "Movie",
    });
    expect(category.isActive).toBeTruthy();

    category = new Category({
      name: "Movie",
      isActive: false,
    });
    expect(category.isActive).toBeFalsy();
  });

  test("getters and setter of tags field", () => {
    // ARRANGE
    let category = new Category({
      name: "Movie",
    });
    expect(category.createdAt).toBeInstanceOf(Date);

    const createdAt = new Date();

    category = new Category({
      name: "Movie",
      createdAt,
    });

    expect(category.createdAt).toBe(createdAt);
  });
});
