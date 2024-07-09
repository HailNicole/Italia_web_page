const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notas')

.then(db => console.log('Database is Connected'))
.catch(err => console.log(err));

module.exports = mongoose;