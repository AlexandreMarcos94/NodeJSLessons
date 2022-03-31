import axios from "axios";

const iife = () => {
    getProducts();
    await getProductsAsync();
    addProduct("Melon", 15);
}

const getProducts = () => {
    axios.get("localhost:3000/products")
    .then((datas => {
        console.log(JSON.parse(datas));
    }))
    .catch((err => {
        console.log(err);
    }))
}

const getProductsAsync = async () => {
    axios.get("localhost:3000/products")
}

const addProduct = (name, quantity) => {
    axios.post('localhost:3000/products', {
        firstName: name,
        lastName: quantity
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}