const { check } = require('express-validator');

module.exports = [
    check('title').not().isEmpty().withMessage('タイトルが未入力です。')
        .isLength({ max:20 }).withMessage('タイトルは20文字以下で入力してください'),
    check('content').not().isEmpty().withMessage('内容が未入力です。'),
];