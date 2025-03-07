import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { name } = req.query;

      let users;

      if (name) {
        // Search users by name (case-insensitive)
        users = await prisma.user.findMany({
          where: {
            name: {
              contains: name,
              mode: "insensitive",
            },
          },
        });
      } else {
        // Fetch all users if no search term is provided
        users = await prisma.user.findMany();
      }

      if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      return res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  if (req.method === "POST") {
    const { name, email, password, role } = req.body;
    console.log(req.body);
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
