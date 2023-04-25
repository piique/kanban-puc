const db= require('../models')
const User=db.user

const addUser = async (req, res) => {
    console.log(req.body)
    let info = {
        name:req.body.name,
        password:req.body.password
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}

const getManager = async (req, res) => {

    const user =  await User.findAll({ where: { manager: true }})

    res.status(200).send(user)
}

const setManager = async (req, res) => {
    let id = req.body.id
    const user = await User.update({manager:true}, { where: { id: id }})
    res.status(200).send(user)

}

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

module.exports = {
    addUser,
    getAllUsers,
    getManager,
    setManager
}