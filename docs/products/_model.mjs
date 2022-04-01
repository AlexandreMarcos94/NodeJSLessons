export default {
products: {
    type: "object",
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
    type: "object",
    additionalProperties: { $ref: "#/components/schema/product" },
} 
}