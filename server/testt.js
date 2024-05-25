import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const encodedPassword = encodeURIComponent(process.env.MONGO_PASS);
const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${encodedPassword}@mymongoinit.6md0cxy.mongodb.net/gemini?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
