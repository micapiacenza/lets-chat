const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

/**
 * Create user
 */
router.put('/create', async (req, res, next) => {
    await controller.put_user();
    res.status(200);
    return res.json({ok: 'ok'});
});

/**
 * Get list of users
 */
router.get('/list', async (req, res, next) => {
    await controller.put_user();
    res.status(200);
    return res.json({ok: 'ok'});
});

/**
 * Get a user by id
 */
router.get('/:id', async (req, res, next) => {
    await controller.get_user();
    res.status(200);
    return res.json({ok: 'ok'});
});

/**
 * Assign role to user
 */
router.post('/:id/assign/:roleType', async (req, res, next) => {
    await controller.post_user();
    res.status(200);
    return res.json({ok: 'ok'});
});

/**
 * Delete a user by id
 */
router.delete('/:id', async (req, res, next) => {
    await controller.delete_user();
    res.status(200);
    return res.json({ok: 'ok'});
});

module.exports = router;
