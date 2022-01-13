const { check } = require('express-validator');

module.exports = [
    check('name').not().isEmpty().withMessage('名前が未入力です。'),
    check('email').isEmail().withMessage('メールアドレスが正しくありません。'),
    check('password').isLength({ min: 6 }).withMessage('パスワードは6文字以降で入力してください。')
    .custom((value, { req }) => {
        if (value !== req.body.re_password) {
            throw new Error('パスワードが一致しません。');
        }
        return true;
    })
];