// web server erstellen
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /comments
router.get('/', (req, res) => {
    db.query('SELECT * FROM comments', (err, rows) => {
        if (err) {
            res.send(err);
        } else {
            res.json(rows);
        }
    });
});
