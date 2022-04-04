/*
    Imports Routers 
*/
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

/*
    C-R-U-D
    Create, Read, Update, Delete
*/

/*
    READ ROUTE
*/
router.get('/', (req, res) => {
    Task.find({}, (err, foundTask) => {
        if(!err) {
            res.status(200).json(foundTask);
        }else {
            res.status(400).json(err);
        }
    });
});

/*
    TABLE ROUTE
*/
router.get('/table', (req, res) => {
    Task.find({}, (err, foundTask) => {
        if (!err) {
            const formattedData = foundTask.reduce((accumulator, item) => {
                accumulator[item.status] = accumulator[item.status]
                ? [...accumulator[item.status], item]
                : [item];
                return accumulator;
            }, {});
            res.status(200).json(formattedData);
        } else {
            res.status(400).json(err);
        }
    });
});


/*
    CREATE ROUTE
*/
router.post('/', (req, res) => {
    const { body }= req;

    Task.create(body, (err, createdTask) => {
        if (!err){
            res.status(200).json({ message: 'All Good!', createdTask: createdTask });
        }else {
            res.status(400).json(err);
        }
    });
});


/*
    SHOW PAGE
*/
router.get('/:id', (req, res) => {
    Task.findById(req.params.id, (err, foundTask) => {
        if(!err) {
            res.status(200).json(foundTask);
        }else {
            res.status(400).send(err);
        }
    });
});


module.exports = router;
