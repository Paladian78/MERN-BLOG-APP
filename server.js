import { app } from "./backend/app.js";
import { connectDB } from "./backend/data/db.js";

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Backend is working");
});
