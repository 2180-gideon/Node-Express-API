const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
//const res = require('express/lib/response');

//Routes
const usersRoutes = require('./routes/users.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.use('/home', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Home Page'));
    
app.listen(PORT, () =>  console.log(`Server running on port: http://localhost:${PORT}`));