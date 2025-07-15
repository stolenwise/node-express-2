// tests/auth.test.js

const request = require("supertest");
const app = require("../app");
const sqlForPartialUpdate = require("../../helpers/partialUpdate");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const createToken = require("../helpers/createToken");

describe("POST /auth/login", function () {
  test("returns 400 for invalid credentials", async function () {
    const resp = await request(app)
      .post("/auth/login")
      .send({ username: "wronguser", password: "wrongpass" });
      
    expect(resp.statusCode).toBe(400);
    expect(resp.body.message).toEqual("Invalid username/password");
  });
});

describe("DELETE /users/:username", function () {
    test("successfully deletes a user", async function () {
      // assume 'testuser' exists and you're logged in as admin
      const resp = await request(app)
        .delete("/users/testuser")
        .send({ _token: adminToken });
  
      expect(resp.body).toEqual({ message: "deleted" });
  
      // Now make sure user is actually gone
      const getResp = await request(app)
        .get("/users/testuser")
        .send({ _token: adminToken });
  
      expect(getResp.statusCode).toBe(404);
    });
  });


  describe("GET /users/:username", function () {
    test("throws 404 if user not found", async function () {
      const resp = await request(app)
        .get("/users/doesnotexist")
        .send({ _token: adminToken });
  
      expect(resp.statusCode).toBe(404);
      expect(resp.body.message).toEqual("No such user");
    });
  });



// tests/helpers/partialUpdate.test.js
describe("sqlForPartialUpdate", function () {
  test("builds correct SQL with external key param", function () {
    const result = sqlForPartialUpdate(
      "users",
      { first_name: "New", email: "new@example.com" },
      "username",
      "testuser"
    );

    expect(result.query).toContain("UPDATE users SET");
    expect(result.query).toContain("WHERE username=$3");
    expect(result.values).toEqual(["New", "new@example.com", "testuser"]);
  });
});


// tests/middleware.test.js
describe("authUser middleware", function () {
    test("rejects tampered token", async function () {
      const fakeToken = jwt.sign({ username: "test" }, "wrongsecret");
  
      const resp = await request(app)
        .get("/users/test") // protected route
        .send({ _token: fakeToken });
  
      expect(resp.statusCode).toBe(401);
    });
  });


  // tests/createToken.test.js
  describe("createToken", function () {
    test("creates token with expiration", function () {
      const token = createToken({ username: "test", admin: false });
      const payload = jwt.verify(token, SECRET_KEY);
  
      expect(payload.username).toBe("test");
      expect(payload.exp).toBeDefined();
    });
  });