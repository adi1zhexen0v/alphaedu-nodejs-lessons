import bcrypt from "bcryptjs";

export async function hashPassword(passwordFromRequest) {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(passwordFromRequest, salt);
    return password;
  } catch (error) {
    console.log(error);
  }
}

export async function isPasswordValid() {}
