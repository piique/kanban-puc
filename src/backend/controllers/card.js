const db= require('../models')
const Card=db.card

const addCard = async (req, res) => {
    console.log(req.body)
    let info = {
        name:req.body.name,
        description:req.body.description,
        estimated_pomodoros:req.body.pomodoroCount,
        status:req.body.status

    }

    const card = await Card.create(info)
    res.status(200).send(card)
    console.log(card)

}
const getAllCards = async (req, res) => {

    let Cards = await Card.findAll({})
    res.status(200).send(Cards)

}

module.exports = {
    addCard,
    getAllCards
    
}