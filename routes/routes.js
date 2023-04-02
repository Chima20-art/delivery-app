const express = require('express')
const Model = require('../model/model')

const router = express.Router()

router.post('/post', async (req, res) => {
    console.log('body ', req)

    try {
        const data = new Model({
            name: req.body.name,
            age: req.body.age,
        })
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
})

router.get('/', (req, res) => {
    res.status(200).send('Api Working....')
})

module.exports = router
