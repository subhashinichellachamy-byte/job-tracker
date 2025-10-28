import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// File path
const FILE = "./jobs.json";

// Get all jobs
app.get("/jobs", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
  res.json(data);
});

// Add a new job
app.post("/jobs", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
  const newJob = { id: Date.now(), ...req.body };
  data.push(newJob);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  res.json(newJob);
});

// Delete a job
app.delete("/jobs/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync(FILE, "utf8"));
  data = data.filter((j) => j.id != req.params.id);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
