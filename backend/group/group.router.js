const express = require('express');
const controller = require('./group.controller');

const router = express.Router();

router.put('/', async (req, res, next) => {
    await controller.put_group();
    res.status(200);
    return res.json({ok: 'ok'});
})
router.get('/:id', async (req, res, next) => {
    await controller.get_group();
    res.status(200);
    return res.json({ok: 'ok'});
})
router.get('/:id/assign/:roleType', async (req, res, next) => {
    await controller.post_group();
    res.status(200);
    return res.json({ok: 'ok'});
})
router.delete('/', async (req, res, next) => {
    await controller.delete_group();
    res.status(200);
    return res.json({ok: 'ok'});
})

module.exports = router;
