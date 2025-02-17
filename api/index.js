import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies
  })
);

app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.listen(8800, () => {
  console.log("connected");
});
