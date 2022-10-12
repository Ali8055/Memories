import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import express from "express";
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log("ABCD 1");
    res.status(200).json(postMessage);
  } catch (error) {
    console.log("ABCDEDF");
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.staus(404).send("No Post With That ID.");

  PostMessage.findById(_id, post, { new: true });

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.staus(404).send("No Post With That ID.");

  await PostMessage.findByIdAndRemove(id);
  // console.log("DELETE");
  res.json({ message: "POST IS DELETED SUCCESSFULLy" });
};
export const likePost = async (req, res) => {
  const { id } = req.params;
  const { likes } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.staus(404).send("No Post With That ID.");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCount: likes + 1,
    },
    { new: true }
  );
  return res.json(updatedPost);
};
