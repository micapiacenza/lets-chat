const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.main_chat);
router.get('/', controller.chat_index);

router.post('/create_group', controller.create_group);
router.post('/create_rom', controller.create_room);
router.post('/create_user', controller.create_user);
// router.get('/create', controller.blog_create_get);
// router.get('/:id', controller.blog_details);

router.put('/add_user_to_group', controller.add_user_to_group);
router.put('/add_user_to_room', controller.add_user_to_room);
router.put('/make_user_super_admin', controller.make_user_super_admin);
router.put('/make_user_group_admin', controller.make_user_group_admin);
router.put('/make_user_group_assistant', controller.make_user_group_assistant);

router.delete('/:id', controller.delete_user);
router.delete('/:id', controller.delete_group);
router.delete('/:id', controller.delete_room);

module.exports = router;
