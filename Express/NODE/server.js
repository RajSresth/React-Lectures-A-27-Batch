import app from "./src/app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import { addRoles } from "./src/config/addRoles.js";
dotenv.config();
const PORT = process.env.PORT || 4000;

// Databse connection call
await connectDB();
await addRoles();

// Server connection call
app.listen(PORT, () => {
  console.log(`Serve is running: http://localhost:${PORT}`);
});
