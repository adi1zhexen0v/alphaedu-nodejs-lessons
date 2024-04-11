import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Swagger Schemas
import userSchema from "./docs/schemas/user.js";
import postSchema from "./docs/schemas/post.js";
// Swagger Paths
import authPaths from "./docs/paths/auth.js";
import postPaths from "./docs/paths/post.js";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Social Network App",
      version: "1.0.0",
      description: "The API list of Simple Social Network App",
    },
    components: {
      schemas: {
        User: userSchema,
        Post: postSchema,
      },
      securitySchemas: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: {
      ...authPaths,
      ...postPaths,
    },
  },
  apis: [],
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);

export default function (app) {
  app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}
