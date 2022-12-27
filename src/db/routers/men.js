const express = require('express');

const MensRanking = require("../models/mens");

const router = express.Router();


// POST Req
router.post("/mens", async (req, res) => {
    try {
        const result = new MensRanking(req.body);
        console.log(result);
        const data = await result.save();
        res.send(data);
    } catch (err) {
        res.status(400).send(err);
    }
})


// GET Req  -: All Doc
router.get("/mens", async (req, res) => {
    try {
        const result = await MensRanking.find({}).sort({ "ranking": 1 });
        console.log(result);
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
})


// Get Individual Person Doc using ID
router.get("/mens/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await MensRanking.find({ _id: id });
        console.log(result);
        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
})


// Update Doc
router.patch("/mens/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await MensRanking.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
})


// Delete Doc
router.delete("/mens/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await MensRanking.findByIdAndDelete({ _id: id }, { new: true });
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        req.status(500).send(err);
    }
})

module.exports = router;