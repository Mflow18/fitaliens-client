import bcrypt from "bcryptjs";
import axios from "axios";

interface LoginData {
  readonly email: string;
  readonly password: string;
}

export default async function signIn({
  email,
  password,
}: LoginData): Promise<string> {
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10);

    const response = await axios.post("/api/auth/login", {
      email,
      password: hashedPassword,
    });

    return response.data.access_token;
  } catch {
    throw new Error("Failed to login");
  }
}
