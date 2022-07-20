const express = require('express');
const { v4: uuidv4 } = require('uuid');

//const users = express();

// routes
const router = express.Router();

const users = [

]
router.get('/', (req, res) => {
    res.send(users)} );


router.post('/', (req, res) => {

     const user = req.body;

     users.push( { ... user, id: uuidv4() });

     res.send('User with a name ${user.firstName} added to the database');

     router.get('/:id', (req, res) => {
         console.log(req.params);
         res.send(req.params);
     });
  
});


module.exports = router;
