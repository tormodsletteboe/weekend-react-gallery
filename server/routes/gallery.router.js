
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

// POST Route
router.post('/', (req, res) => {
    console.log('In POST ',req.params.id);
    const sqlText =`
        INSERT INTO "galleryList"
        VALUES ("path","description")
        ($1,$2);
    `;
    pool.query(sqlText,[req.body.path,req.body.description])
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((err)=>{
            res.sendStatus(500);
        });
    
}); // END POST Route

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