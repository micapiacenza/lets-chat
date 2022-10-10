const express = require('express');
const controller = require('./room.controller');

const router = express.Router();

router.put('/create', async (req, res, next) => {
    await controller.put_room();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.get('/:id', async (req, res, next) => {
    await controller.get_room();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.get('/:is/users', async (req, res, next) => {
    await controller.get_users_room();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.put('/:id/add-user', async (req, res, next) => {
    await controller.get_users_room();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.delete('/:id', async (req, res, next) => {
    await controller.delete_room();
    res.status(200);
    return res.json({ok: 'ok'});
});

router.delete('/room/:id/remove-user', async (req, res, next) => {
    await controller.delete_user_room();
    res.status(200);
    return res.json({ok: 'ok'});
})

module.exports = router;
