
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('In PUT ',req.params.id);
    const sqlText =`
        UPDATE "galleryList"
        SET "likes"="likes"+1
        WHERE "id" = $1;
    `;
    pool.query(sqlText,[req.params.id])
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((err)=>{
            res.sendStatus(500);
        });
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText =`
        SELECT * FROM "galleryList"
        ORDER BY "id";
    `;
    pool.query(sqlText)
        .then((response)=>{
            res.send(response.rows);
        })
        .catch((err)=>{
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;