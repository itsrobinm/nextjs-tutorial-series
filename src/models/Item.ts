import mongoose, { Schema } from "mongoose";

export interface IItem extends Document {
    _id: string;
    authorId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    title: string;
    content: string;
    price: mongoose.Types.Decimal128;
    imgUrls: string[];
    datePosted: Date;
}

const itemSchema: Schema = new mongoose.Schema({
    _id: {
        type: String, // Not necessary to specify unique
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    price: {
        type: mongoose.Types.Decimal128, // Using Decimal128 for price
    },
    imgUrls: [
        {
            type: String,
            required: true,
        },
    ],
    datePosted: {
        type: Date,
        default: Date.now,
    },
});

const Item =
    mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);

export default Item;