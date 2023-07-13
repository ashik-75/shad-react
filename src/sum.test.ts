import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("#sum", () => {
  it("return sum value if input are number", () => {
    expect(sum(2, 2)).equal(4);
  });
});
