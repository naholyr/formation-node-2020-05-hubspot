const fs = require("fs").promises;

describe("Filesystem", function() {
  test("read 1.txt", async function() {
    const content = await fs.readFile("1.txt", "utf8");
    expect(content).toEqual("un");
  });

  test("read 12.txt (should fail)", async function() {
    expect(async function() {
      await fs.readFile("12.txt", "utf8");
    }).rejects.toThrow(
      new Error("ENOENT: no such file or directory, open '12.txt'")
    );
  });
});
