import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(`mongodb://root:example@localhost:27018/next-database?authSource=admin`);
    console.log("Database connection successful:", db.connections[0].readyState === 1);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
