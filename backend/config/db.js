import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_REMOTE_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Connected to MongoDB: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Mongo Connect Error: ${err.message}`.red.underline.bold);
    // console.log(err);
    process.exit(1);
  }
};

export default connectDB;
