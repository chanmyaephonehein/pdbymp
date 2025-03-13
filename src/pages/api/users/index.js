import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { verifyToken } from "../../../utils/jwtUtils"; // Import JWT utility

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // 🔐 Get Token from Request Headers
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }

  if (req.method === "GET") {
    try {
      // 🔹 Only Admins Can Fetch Users
      if (decoded.role !== "Admin") {
        return res.status(403).json({ message: "Access denied: Admins only" });
      }

      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true, // Exclude password for security
        },
      });

      if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      return res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  if (req.method === "POST") {
    // 🔹 Only Admins Can Create Users
    if (decoded.role !== "Admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: { name, email, password: hashedPassword, role },
      });

      return res.status(201).json({
        message: "User created successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error creating user",
        error: error.message,
      });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
