
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route, increment the likes with 1 per click
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
    const sqlText =`
        INSERT INTO "galleryList" ("path","description")
        VALUES ($1,$2);
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
            console.log('is it here');
            res.sendStatus(500);
        });
}); // END GET Route

// delete Route
router.delete('/:id', (req, res) => {
    //console.log('In router DELETE ',req.params.id);
    const sqlText =`
        DELETE FROM "galleryList"
        WHERE "id"=$1;
    `;
    pool.query(sqlText,[req.params.id])
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((err)=>{
            res.sendStatus(500);
        });
    
}); // END delete Route

module.exports = router;