function getUser(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "John", age: 30 });
  }, 1000);
}

function getPurchases(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, userId: userId, product: "Laptop", price: 1000 },
      { id: 2, userId: userId, product: "Phone", price: 2000 },
    ]);
  }, 1000);
}

function getProductDetails(productId, productName, productPrice, callback) {
  setTimeout(() => {
    callback({ id: productId, name: productName, price: productPrice });
  }, 1000);
}

//Cách 1 call back
// getUser(1, (user) => {
//   console.log(user);
//   getPurchases(user.userId, (purchase) => {
//     console.log(purchase);
//     let total = 0;
//     let count = 0;
//     purchase.forEach((product) => {
//       getProductDetails(product.id, product.name, product.price, () => {
//         total += product.price;
//         count++;
//         if (count == purchase.length) {
//           console.log(total);
//         }
//       });
//     });
//   });
// });

//Cách 2 : Promise
function getUser(userId) {
  return new Promise((resolve, reject) => {
    resolve({ id: userId, name: "John", age: 30 });
  });
}
function getPurchases(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },
      ]);
    }, 1000);
  });
}
function getProductDetails(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: product, name: product.product, price: product.price });
    }, 1000);
  });
}
// getUser(1)
//   .then((user) => {
//     console.log(user);
//     return getPurchases(user.id);
//   })
//   .then((purchase) => {
//     console.log(purchase);
//     let total = 0;
//     let count = 0;
//     purchase.forEach((product) => {
//       getProductDetails(product).then((data) => {
//         total += product.price;
//         count++;
//         if (count == purchase.length) {
//           console.log(total);
//         }
//       });
//     });
//   });
async function main() {
  try {
    const user = await getUser(1);
    const purchases = await getPurchases(user.id);
    let sum = 0;
    let count = 0;
    purchases.forEach(async (product) => {
      try {
        const productDetails = await getProductDetails(product);
        console.log(productDetails);
        sum += product.price;
        count++;
        if (count === purchases.length) {
          console.log(sum);
        }
      } catch (error) {
        console.log("ow day", error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
main();
