export default {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "NodeJS API",
        description: "NodeJS API REST ESGI",
        contact: {
            name: "ESGI Contact",
            email: "info@esgi.fr",
            url: "https://esgi.fr"
        }
    },
    servers: [
        {
            url: "http://localhost:3000/api-docs",
            description: "Local Server",
    },
],
    paths: {
        ...products.path,
    },
    components: {
        schemas: {
            ...products.schema,
        },
    },
};