const express = require('express');
const db = require('./userDb.js')

const router = express.Router();
router.use(express.json())

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    db.get()
        .then(users => {
            if (users) {
                res.json(users)
            } else {
                res.status(404).json({
                    message: "could not find users"
                })

            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "failed to get users"
            })
        })
});


router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
