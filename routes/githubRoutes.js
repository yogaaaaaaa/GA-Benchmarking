const express = require("express");
const { profile } = require("../models");
const request = require("request");

const router = express.Router();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require("config");

const Profile = require("../models/profile");


router.post(
  "/",

  async (req, res) => {
    try {
      
      let createProfile = await profile.create(req.body)
      
      return res.status(201).json({
        message: "Success",
        createProfile,
      })

    } catch (error) {
      console.error(e);
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
);

router.get("/username/:username",(req, res) => {
    try {
      const options = {
        uri: `https://api.github.com/users/${
          req.params.username
        }/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENTID}&client_secret=${process.env.GITHUB_SECRET}`,
        method: "GET",
        headers: { "user-agent": "node.js" },
      };

      request(options, (error, response, body) => {
        if (error) console.error(error);

        if (response.statusCode !== 200) {
          return res.status(404).json({ msg: "No Github profile found" });
        }

        res.json(JSON.parse(body));
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;
