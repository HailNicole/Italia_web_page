const nota = require ('../models/notas')

exports.agregarNota = async(req, res) =>{
    try{
        const newNota = new nota (req.body)
        await newNota.save()
        res.status(200).json('Nota Agregada')
    }catch(err){
        res.status(500).send('Error al agregar la nota')
    }
}