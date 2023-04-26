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

const updateCard = async (req, res) => {
    let id = req.params.id
    let info = {
        name:req.body.name,
        description:req.body.description,
        estimated_pomodoros:req.body.pomodoroCount,
        status:req.body.status
    }

    await Card.update(info, { where: { id: id }})
    let Cards = await Card.findAll({ where: { id: id }})
    res.status(200).send(Cards)
   

}
const deleteCard = async (req, res) => {

    let id = req.params.id
    
    await Card.destroy({ where: { id: id }} )

    res.status(200).send("card deletado com sucesso!")

}

module.exports = {
    addCard,
    getAllCards,
    updateCard,
    deleteCard
    
}