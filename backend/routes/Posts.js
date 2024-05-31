const express = require('express') ;
const cloudinary = require('cloudinary').v2;
const Post = require('../models/PostSchema');

cloudinary.config({
    cloud_name: 'dgtnkfezh',
    api_key: '621463612375968',
    api_secret: 'WXP-1T5foKcTppbhH-OvuGtcsdM',
});

const router = express.Router();



router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error) ;
    }
    }
);



router.post('/', async (req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      const photoUrl = await cloudinary.uploader.upload(photo);
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.secure_url,
      });

      return res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
    }
  })
  ;

module.exports = router ;