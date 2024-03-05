export async function getProducts(req, res) {
  console.log("I get products");
  res.status(200).json({ data: "I get the products"});
}

export function getProduct() {
  console.log("I get a product");
}

export function createProduct() {
  console.log("I create a product");
}

export function updateProduct() {
  console.log("I update a product");
}

export function deleteProduct() {
  console.log("I delete a product");
}