const request = require("supertest");
const app = require("../app");

describe("Test Express app routes", () => {
  test('GET / response should contain "Hello"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Hello");
  });
});
