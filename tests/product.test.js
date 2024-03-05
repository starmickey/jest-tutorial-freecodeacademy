const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const Product = require("../models/product.model.js");

require("dotenv").config();

// Parameters of an existent product
let productId;
const productName = "vanilla ice cream"

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST);

  // Create test product
  const product = await Product.create({
    name: productName,
    price: 1000,
    description: "white vanilla",
  });

  // Save its id for future access
  productId = product._id;
});

describe("GET /api/products", () => {
  it("Should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/product", () => { 
  it("Gets a product by id", async () => {
    const res = await request(app).get(
      `/api/products/${productId}`
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toMatch(productName);
  });
});

describe("POST /api/products", () => { 
  it("Creates products", async () => {
    const product = {
      name: "test-product",
      price: 2300,
      description: "testiiing",
    };
    const res = await request(app)
      .post("/api/products")
      .send(product);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toMatch(product.name);
  });
});

describe("PATCH /api/products", () => {
  it("Updates a product", async () => {
    const changes = { price: 120 };

    const res = await request(app)
      .patch(`/api/products/${productId}`)
      .send(changes);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toMatch(productName);
    expect(res.body.price).toBe(changes.price);
  });
});

describe("DELETE /api/products", () => {
  it("Deletes a product", async () => {
    const res = await request(app).delete(
      `/api/products/${productId}`
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toMatch(productName);
  })
})

afterEach(async () => {
  await mongoose.connection.close();
});