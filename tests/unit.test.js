const md5 = require("../public/js/md5.js");

describe("Frontend Unit Tests: MD5 Hashing", () => {
  test("Should correctly hash a standard password string", () => {
    const hash = md5("password");
    expect(hash).toBe("5f4dcc3b5aa765d61d8327deb882cf99");
  });

  test("Should return a 32-character hexadecimal string", () => {
    const hash = md5("HelloWorld123!");
    expect(hash.length).toBe(32);
    expect(/^[a-f0-9]{32}$/.test(hash)).toBe(true);
  });
});
