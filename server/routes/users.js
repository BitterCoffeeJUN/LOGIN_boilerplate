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

export default router
