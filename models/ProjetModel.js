const  mongoose=require('mongoose');
const Schema = mongoose.Schema;


const ProjetSchema=new Schema({
   Titre:{ type: String, required: true }
},
{ timestamps: true ,});




module.exports=mongoose.model('projet',ProjetSchema);
