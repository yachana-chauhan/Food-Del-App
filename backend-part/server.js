import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve('./.env') }); 

import express from "express"

import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app= express();
const port =process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173", // frontend
<<<<<<< HEAD
        "http://localhost:5174", // admin panel
          "https://neon-sopapillas-945e3a.netlify.app", //frontend
          "https://relaxed-tanuki-7b7956.netlify.app"
=======
        "http://localhost:5174",// admin panel
        "https://neon-sopapillas-945e3a.netlify.app",
        "https://relaxed-tanuki-7b7956.netlify.app"
>>>>>>> 88f83728142eb517162c935fddb28c8ca9184fa4
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
//db connection
connectDB();

app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")

})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

