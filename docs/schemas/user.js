const userSchema = {
  type: "object",
  required: ["firstName", "lastName", "email", "password", "isManager"],
  properties: {
    _id: {
      type: "ObjectId",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
      example: "example@mail.kz"  ,
    },
    password: {
      type: "string",
      description: "Hashed password by BCrypt",
    },
    isManager: {
      type: "boolean",
    },
  },
};

export default userSchema;
