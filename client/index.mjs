import axios from "axios";

const getProducts = () => {
    axios.get("http://localhost:3000/products")
    .then((response) => {
        console.log(response.data);
    });
}

const getProductsAsync = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

const addProduct = (name, quantity) => {
    axios.post('http://localhost:3000/products', {
        name,
        quantity
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
}

(async () => {
    getProducts();
    const res = await getProductsAsync();
    addProduct("Piment", 250);
  })();