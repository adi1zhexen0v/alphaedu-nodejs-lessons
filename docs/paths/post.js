const postPaths = {
  "/posts/": {
    get: {
      summary: "Fetch all posts",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Post"],
      responses: {
        200: {
          description: "This route return all posts",
          content: {
            "application/json": {
              schema: {
                type: "array",
                $ref: "#/components/schemas/Post",
              },
            },
          },
        },
      },
    },
  },
  "/posts/public": {
    get: {
      summary: "Fetch all public posts",
      tags: ["Post"],
      responses: {
        200: {
          description: "This route return all public posts",
          content: {
            "application/json": {
              schema: {
                type: "array",
                $ref: "#/components/schemas/Post",
              },
            },
          },
        },
      },
    },
  },
  "/posts/{id}": {
    get: {
      summary: "Fetch post by id",
      tags: ["Post"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "This route return a single post",
        },
      },
    },
  },
};

export default postPaths;
