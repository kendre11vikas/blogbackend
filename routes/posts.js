import express from "express";

import {
  getPostsBySearch,
  getPostsByCreator,
  commentPost,
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  trendingPosts,
  getPostsByCatageory,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/creator", getPostsByCreator);
router.get("/search", getPostsBySearch);
router.get("/catageory", getPostsByCatageory);
router.get("/", getPosts);
router.get("/trending", trendingPosts);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
