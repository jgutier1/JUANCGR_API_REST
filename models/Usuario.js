const {Schema,model} = require("mongoose");

const UsuarioSchema= Schema ({
nombre: {
    type:String,
    required: true,
},
email: {
    type:String,
    required: true,
    unique:true,
},
estado:{
    type:String,
    required:true,// not null
    enum: [
        "Activo",
        "Inactivo",
    ]
},
fechaCreacion:{
    type:Date,
    required:true,
},
fechaActualizacion:{
    type:Date,
    required:true,  
}

});

module.exports = model ("usuario",UsuarioSchema);