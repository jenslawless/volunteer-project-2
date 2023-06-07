// import mongoose from "mongoose";
const mongoose = require('mongoose');

const { Schema } = mongoose;

const postData = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.models.Post || mongoose.model('Post', postData)

// const PostData = mongoose.model.Post || mongoose.model("Post", Schema)
// export default PostData