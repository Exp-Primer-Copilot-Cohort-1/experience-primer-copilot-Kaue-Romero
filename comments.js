// Create web server

// Import express module
const express = require('express');

// Import comment controller
const commentController = require('../controllers/commentController');

// Create router
const router = express.Router();

// GET request for creating a comment. NOTE This must come before routes that display comment (uses id).
router.get('/comment/create', commentController.comment_create_get);

// POST request for creating a comment.
router.post('/comment/create', commentController.comment_create_post);

// GET request to delete comment.
router.get('/comment/:id/delete', commentController.comment_delete_get);

// POST request to delete comment.
router.post('/comment/:id/delete', commentController.comment_delete_post);

// GET request to update comment.
router.get('/comment/:id/update', commentController.comment_update_get);

// POST request to update comment.
router.post('/comment/:id/update', commentController.comment_update_post);

// GET request for one comment.
router.get('/comment/:id', commentController.comment_detail);

// GET request for list of all comment items.
router.get('/comments', commentController.comment_list);

// Export router
module.exports = router;