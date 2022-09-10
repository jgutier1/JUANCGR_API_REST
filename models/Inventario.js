const {Schema,model} = require("mongoose");

const InventarioSchema= Schema ({

    
    serial: {
        type:String,
        required: true,
    },

    modelo: {
        type:String,
        required: true,
    },

    descripcion: {
        type:String,
        required: true,
    },

    color: {
        type:String,
        required: true,
    },

    foto: {
        type:String,
        required: true,
    },

    fechaCompra: {
        type:String,
        required: true,
    },

    
    precio:{ // independientemente sie es 12500.50  o es entrero
        type:Number,
        required: true,
    },
//pk y 
    
usuario:{
    type:schema.types.objecId,
    ref:"Usuario",
    required:false,
},




marca:{
    type:schema.types.objecId,
    ref:"Marca",
    required:true,
},

tipoequipo:{
    type:schema.types.objecId,
    ref:"TipoEquipo",
    required:true,
},

estadoEquipo:{
    type:schema.types.objecId,
    ref:"EstadoEquipo",
    required:false,
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

module.exports = model ("Inventario",InventarioSchema);