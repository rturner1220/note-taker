const express = require('express');
const PORT = process.env.PORT || 3010;

const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//set static folder
app.use(express.static('public'));


// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listener
app.listen(PORT, () => console.log(`server started on port ${PORT}`));