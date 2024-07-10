const {Schema, model} = require ('mongoose');

const notaSchema = new Schema({
    nombre: String,
    apellido: String,
    calificacion: Number
},{
    timestamps: true
});

module.exports = model('notas', notaSchema);