export default {
products: {
    type: "Object",
    properties: {
        name: {
            type: "string",
            description: "Name of product",
            example: "Pomme",
        },
        quantity: {
            type: "Integer",
            description: "Quantity of profuct",
            example: "12",
        },
    },
},
Products: {
    type: "Object",
    additionalProperties: { $ref: "#/components/schema/product" },
} 
}