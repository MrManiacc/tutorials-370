const router = require('express').Router();
const {Post} = require("../util/model")

/**
 * This is used to list out all of the possible posts in the collection
 */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({message: err})
    }
});

/**
 * This is supposed to post information to the mongodb database
 */
router.post('/', async (req, res) => {
    //Create a new post model instance
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        res.send(await post.save())
    } catch (err) {
        res.status(400).json({message: err})
    }
});

/**
 * This is used to a specific post by the given
 *  postId from the parameters of the get request
 */
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params["postId"]);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({message: err})
    }
});


/**
 * This is used to delete the given post of the given id
 */
router.delete('/:postId', async (req, res) => {
    try {
        const post = await Post.deleteOne({_id: req.params["postId"]});
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({message: err})
    }
});

/**
 * This is used to update a given post with a new title
 */
router.patch('/:postId', async (req, res) => {
    try {
        const updated = await Post.updateOne({_id: req.params["postId"]}, {$set: {title: req.body.title}})
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({message: err})
    }
})

module.exports = router;