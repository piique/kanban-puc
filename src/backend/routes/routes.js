const express = require('express');
const router = express.Router();
const user  = require('../controllers/user'); 
const card  = require('../controllers/card'); 
const pomodoro = require('../controllers/pomodoro.js');
const Sequelize = require('sequelize');
//const UserModel = require('./models/user.js'); 


//const User = UserModel(sequelize, Sequelize);

router.post('/addUser', user.addUser)
router.get('/getAllUsers', user.getAllUsers)
router.get('/getManager', user.getManager)
router.post('/setManager', user.setManager)

//rotas do card


router.post('/task', card.addCard)
router.get('/tasks', card.getAllCards)
router.put('/task/:id', card.updateCard)
router.delete('/task/:id', card.deleteCard)

router.get('/all-pomodoros', pomodoro.getAllPomodoros);
router.get('/pomodoro/:id', pomodoro.getPomodoro);
router.post('/add-pomodoro', pomodoro.postPomodoro);


/*
router.post('/createUser', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.create({ name, password });
    res.status(201).json({ message: 'Usuário criado com sucesso!', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "deu erro o coco" });
  }
});
*/
module.exports = router;
