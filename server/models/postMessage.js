import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  // with mongodb you can create documents one can have the title, the message and so on...
  title: String,
  message: String,
  creator: String,
  tags: [String], // array of strings
  selectedFile: String, // we are going to convert an image into a string using that base64.
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
