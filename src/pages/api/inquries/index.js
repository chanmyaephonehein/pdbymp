import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.id) {
      // Fetch a single inquiry by ID
      try {
        const inquiry = await prisma.contactInquiry.findUnique({
          where: { id: parseInt(req.query.id) }, //
        });

        if (!inquiry)
          return res.status(404).json({ error: "Inquiry not found" });

        return res.json(inquiry);
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Server error", details: error.message });
      }
    } else {
      // Fetch all inquiries
      try {
        const allInquiries = await prisma.contactInquiry.findMany();
        return res.json(allInquiries);
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Server error", details: error.message });
      }
    }
  } else if (req.method === "POST") {
    const {
      name,
      email,
      phoneNumber,
      companyName,
      country,
      jobTitle,
      jobDetails,
      status,
    } = req.body;

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !companyName ||
      !country ||
      !jobTitle ||
      !jobDetails ||
      !status
    ) {
      return res.status(400).json({ error: "All fields are required" });
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
          status,
        },
      });

      return res.status(201).json(newInquiry);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Server error", details: error.message });
    }
  } else if (req.method === "PUT") {
    const { id, status } = req.body;

    if (!id || !status)
      return res.status(400).json({ error: "ID and status are required" });

    try {
      const updatedInquiry = await prisma.contactInquiry.update({
        where: { id: parseInt(id) },
        data: { status },
      });

      return res.json(updatedInquiry);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Server error", details: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
