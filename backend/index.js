import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import note_routes from './routes/note_route.js';  
const app = express()
dotenv.config();

const port = process.env.PORT || 4002

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Database connected"))
.catch(err => console.error("❌ Database connection error:", err));


app.use(express.json());
app.use("/api/v1/noteapp", note_routes);
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
