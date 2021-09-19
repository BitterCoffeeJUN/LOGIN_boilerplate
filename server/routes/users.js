import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.post('/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.json({success: true, userInfo})
    })
})

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.',
            })
        }
    })
})

export default router
