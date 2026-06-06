  import express from "express";
  import dotenv from "dotenv"
  dotenv.config({ path: "./backend/.env" }); 
  import cors from "cors";

  import connectDB from "./config/db.js";
  import authRoutes from "./routes/authRoutes.js";
  import productRoutes from "./routes/productRoutes.js";
  import userRoutes from "./routes/userRoutes.js";

  dotenv.config();

  connectDB();

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);

  app.get("/", (req, res) => {
    res.send("API Running");
  });

  app.listen(process.env.PORT, () => {
    console.log(
      `Server Running on ${process.env.PORT}`
    );
  });