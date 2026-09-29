const express = require("express");
const router = express.Router();

const Certificate = require("../models/Certificates");

router.post("/certificates", async (req, res) => {
    try {
        const certificate = new Certificate(req.body);
        const savedCertificate = await certificate.save();

        res.status(201).json(savedCertificate);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/certificates", async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.json(certificates);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;