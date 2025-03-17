// import csvParser from "csv-parser";
// import { Readable } from "stream";

const csvParser = require("csv-parser");
const { Readable } = require("stream");

 const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const results = [];
    const stream = Readable.from(req.file.buffer.toString().split("\n")); // File buffer se stream create kar raha hai

    stream
      .pipe(csvParser())  // CSV parsing start karta hai
      .on("data", (data) => results.push(data)) // Har row results array me store hoti hai
      .on("end", async () => {
        res.json({ message: "CSV processed successfully", data: results });
      });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { uploadCSV };