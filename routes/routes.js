const express = require('express')
const Model = require('../../model/model')

const router = express.Router()

router.post('/post', async (req, res) => {
    console.log('body ', req)

    try {
        const data = new Model({
            name: req.body.name,
        })
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
})

router.get('/getMealById', async (req, res) => {
    try {
        const id = req.body.id
        const mealDoc = await Model.findById(id)
        res.json(mealDoc)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.get('/getMealByName', async (req, res) => {
    try {
        const name = req.body.name
        const mealDoc = await Model.findOne({ name: name })
        res.json(mealDoc)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.delete('/deleteById', async (req, res) => {
    try {
        const id = req.body.id
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router
