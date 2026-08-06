const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const connectDB = require("./config/dbConnection")
const authRoutes = require("./routes/authenticationRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");

dotenv.config();

connectDB()

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:5173",          // Local development
      "tech-verse-5tat41tcw-bips-projects-87401990.vercel.app",  // New Vercel URL
    ],
    credentials: true,
  })
);
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/profile", userProfileRoutes);


app.get("/", (req, res) => {
    res.send("Backend is running")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})