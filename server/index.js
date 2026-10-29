
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Intellect Illumine AI Assistant",
  });
});

app.listen(PORT, () => {
  console.log(`AI backend running at http://localhost:${PORT}`);
});
