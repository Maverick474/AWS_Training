const shortid = require('shortid');
const URL = require('../models/models');

const generateShortURL = async (req, res) => {
    const shortId = shortid();
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: "URL required" });
    }

    try {
        const newURL = await URL.create({
            shortID: shortId,
            redirectURL: body.url, // Fixed typo here
            visitHistory: [],
            createdBy: req.user._id
        });

        // Return both shortID and redirectURL
        return res.render('home',
            {
                shortID: newURL.shortID,
                redirectURL: newURL.redirectURL
            }
        )
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { generateShortURL };
