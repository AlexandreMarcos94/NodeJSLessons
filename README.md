# NodeJSLessons

The purpose of this course is to learn how to use [NodeJs](https://nodejs.org/en/) and use it to build an API from scratch.

--- 

# How use this repository ?

* To launch the app you first need to clone the repo with this url : https://github.com/AlexandreMarcos94/NodeJSLessons.git
* Go in the server directory
* npm run dev
* You can access it on : http://localhost:3000

---

# API ENDPOINT

### Get all product 

```
Method : GET | Endpoint : http://localhost:3000/products
```

### Get a specific product 

```
Method : GET | Endpoint : http://localhost:3000/products/{name}
```
* Example : http://localhost:3000/products/pomme


### Delete a specific product 

```
Method : DELETE | Endpoint : http://localhost:3000/products/{name}
```
* Example : http://localhost:3000/products/pomme


### Add a product 

```
Method : POST | Endpoint : http://localhost:3000/products
```
* Product format : 

```
{
  "name" : {name}
  "quantity": {quantity}
}
```
* Example : 

```
{
  "name" : "Fraise"
  "quantity": 500
}
```




