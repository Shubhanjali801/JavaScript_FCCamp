// 1. Empty inventory array
const inventory = [];

// 2. Find product index
function findProductIndex(productName) {
  const name = productName.toLowerCase();
  return inventory.findIndex(item => item.name === name);
}

// 3–5. Add product
function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: product.quantity
    });
    console.log(`${name} added to inventory`);
  }
}

// 6–9. Remove product
function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${product.quantity}`
    );
    return;
  }

  product.quantity -= quantity;

  console.log(
    `Remaining ${name} pieces: ${product.quantity}`
  );

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}

addProduct({ name: "FLOUR", quantity: 20 });
addProduct({ name: "RICE", quantity: 5 });

removeProduct("FLOUR", 5);
// Remaining flour pieces: 15

removeProduct("FLOUR", 20);
// Not enough flour available, remaining pieces: 15


// https://www.freecodecamp.org/learn/javascript-v9/lab-inventory-management-program/build-an-inventory-management-program