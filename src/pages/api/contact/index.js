import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    phoneNumber,
    companyName,
    country,
    jobTitle,
    jobDetails,
  } = req.body;

  if (!name || !email || !country) {
    return res
      .status(400)
      .json({ error: "Name, Email, and Country are required fields" });
  }

  try {
    const newInquiry = await prisma.contactInquiry.create({
      data: {
        name,
        email,
        phoneNumber,
        companyName,
        country,
        jobTitle,
        jobDetails,
        status: "PENDING",
      },
    });

    res.status(201).json(newInquiry);
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
