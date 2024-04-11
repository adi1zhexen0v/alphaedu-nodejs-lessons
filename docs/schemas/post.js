const postSchema = {
  type: "object",
  required: ["title", "text", "isPublic", "userId"],
  properties: {
    _id: {
      type: "ObjectId",
    },
    title: {
      type: "string",
    },
    text: {
      type: "string",
    },
    isPublic: {
      type: "boolean",
    },
    userId: {
      type: "ObjectId",
      description: "Ref to User model",
    },
  },
};

export default postSchema;
