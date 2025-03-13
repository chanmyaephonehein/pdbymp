import { verifyToken } from "@/utils/jwtUtils";

export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(403).json({ message: "Invalid token" });

  if (req.query.role === "admin" && decoded.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }

  return res
    .status(200)
    .json({ message: `Access granted for ${decoded.role}` });
}
