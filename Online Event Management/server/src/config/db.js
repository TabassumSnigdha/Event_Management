import mongoose from 'mongoose';
import Logger from '../utils/Logger.js';
import properties from './properties.js';

const connectDB = async () => {
  try {
    mongoose.connect(properties.MONGO_URI, {
      useNewUrlParser: true,
    });
    Logger.info('MongoDB Connected...');
  } catch (err) {
    Logger.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
