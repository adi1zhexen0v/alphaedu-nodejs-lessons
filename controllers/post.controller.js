import { Post } from "../models/Post.js";

export async function createPost(req, res) {
  try {
    const { title, text, isPublic } = req.body;
    const newUser = new Post({ title, text, isPublic });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
}

export async function getPublicPosts(req, res) {
  try {
    const posts = await Post.find({ isPublic: true });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
}
