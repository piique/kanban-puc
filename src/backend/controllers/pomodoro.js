const db = require('../models');
const Pomodoro = db.pomodoro

const getAllPomodoros = async (req, res) => {
    const pomodoros = await Pomodoro.findAll({})

    res.status(200).send(pomodoros)
}

const getPomodoro = async (req, res) => {
    const { id } = req.params
    const pomodoro = await Pomodoro.findByPk(id)

    res.status(200).send(pomodoro)
}

const postPomodoro = async (req, res) => {
    const pomodoro = await Pomodoro.create(req.body)

    res.status(200).send(pomodoro)
}

module.exports = {
    getAllPomodoros,
    getPomodoro,
    postPomodoro
}