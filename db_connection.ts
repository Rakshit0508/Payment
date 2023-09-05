// import mongoose, { ConnectOptions } from 'mongoose';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
type Env = {
    DB_URL: string;
}

const DB_URL = process.env["DB_URL" as keyof Env] || "mongodb+srv://singhalrakshit0824:rakshit0824@cluster0.tkhkpoc.mongodb.net/?retryWrites=true";
const connectToDatabase = async (): Promise<void> => {
//   const options: ConnectOptions = {  useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

  await mongoose.connect(DB_URL);
};

export { connectToDatabase };