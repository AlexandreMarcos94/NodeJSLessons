import axios from "axios";
/**
 * Recupère l'ensemble des produits
 * @returns json
 */
const getProducts = () => {
    axios.get("http://localhost:3000/products")
    .then((response) => {
        console.log(response.data);
    });
}


/**
 * Recupère l'ensemble des produits de manière asynchrone
 * @returns json
 */
const getProductsAsync = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


/**
 * Ajoute un produit dans le fichier products.json
 * @param {string} name
 * @param {Integer} quantity
 * @returns json
 */
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

/**
 * Fonction IIFE exécute les fonction
 */
(async () => {
    getProducts();
    const res = await getProductsAsync();
    addProduct("Piment", 250);
  })();