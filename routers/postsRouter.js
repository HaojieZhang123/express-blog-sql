const express = require('express');
const router = express.Router();

// controllers
const postController = require('../controllers/postsController');

// CRUD routes
router.get('/', postController.index);
router.get('/:id', postController.show);
// router.post('/', postController.store);
// router.put('/:id', postController.update);
// router.patch('/:id', postController.modify);
router.delete('/:id', postController.destroy);

// export
module.exports = router;