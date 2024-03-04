import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to mongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(process.env.PORT, (req, res) => {
    console.log("server is running on port", process.env.PORT);
});


// Create a middleware and a function to handle possible errors

app.use((err, req, res, next) => {
const statusCode = err.statusCode || 500;
const message = err.message || 'Internal server Error';
return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
});

})

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);
