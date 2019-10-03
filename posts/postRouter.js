const express = require('express');
const db = require('./postDb')

const router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {
    db.get()
        .then(posts => {
            if (posts) {
                res.json(posts)
            } else {
                res.status(404).json({
                    message: "could not find posts"
                })

            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "failed to get posts"
            })
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.getById(id)
        .then(post => {
            if (post) {
                res.json(post)
            } else {
                res.status(404).json({
                    message: "post not found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "could not get post"
            })
        })
});


router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({
                    message: "post has been deleted"
                }).status(202)
            } else {
                res.status(404).json({
                    message: "post could not be found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "could not delete post"
            })
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params
    db.update(id, req.body)
        .then(updated => {
            if (updated) {
                res.json(updated)
            } else {
                res.status(404).json({
                    message: "could not find post to update"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "could not update post"
            })
        })
});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;