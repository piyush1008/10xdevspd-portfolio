import mongoose, { Schema, model } from 'mongoose';

// Use environment variable or default to localhost for local development
// For Docker: use 'mongo' as hostname
// For local: use 'localhost' as hostname
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoUser = process.env.MONGO_USER || 'admin';
const mongoPassword = process.env.MONGO_PASSWORD || 'mongopassword';
const mongoDatabase = process.env.MONGO_DATABASE || 'portfolio';

//const mongoUrl: string = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}`;

const mongoUrl: string = 'mongodb+srv://piyushsunny:piyushsunny@cluster0.zigxntn.mongodb.net/portfolio'


// Connect to MongoDB
export const db=async()=>{
    mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
}

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);