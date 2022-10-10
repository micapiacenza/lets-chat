const express = require('express');
const controller = require('./group.controller');
const roomRouter = require('../room/room.router')
const router = express.Router();

router.put('/create', async (req, res, next) => {
    await controller.put_group();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.get('/:id', async (req, res, next) => {
    await controller.get_group();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.get('/list', async (req, res, next) => {
    await controller.get_group();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.get('/:id/rooms', async (req, res, next) => {
    await controller.get_rooms_in_group();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.delete('/:id', async (req, res, next) => {
    await controller.delete_group();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.use(':groupId/room', roomRouter);

module.exports = router;
