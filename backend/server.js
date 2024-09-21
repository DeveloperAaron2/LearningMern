require('dotenv').config();
const cors = require('cors');
const workoutRoutes = require('./routes/workouts.js');
const userRoutes = require('./routes/user.js');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//midleware to parse JSON request bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    credentials: true // Permitir cookies si es necesario
  }));

app.use((req,res,next)=> {

    console.log(req.path, req.method);
    next();

})

app.use('/api/workouts', workoutRoutes);

app.use('/api/user', userRoutes);


//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => 
    app.listen(process.env.PORT, () => {
        console.log('Conneted to MongoDB & Server is running on port ' + process.env.PORT);
    })
)
.catch((error) => { console.error(error) } );

