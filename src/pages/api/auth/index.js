import { prisma } from "@/utils/server";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { email, password } = req.body;
    if (!email || !password) return res.sendStatus(400);
    const findUser = await prisma.user.findFirst({ where: { email } });
    const isCorrectPassword = bcrypt.compare(password, findUser.password);
    if (isCorrectPassword) {
      const accessToken = jwt.sign(findUser, config.jwtSecret);
      return res.send({ accessToken });
    }
    return res.sendStatus(401);
  }
}
