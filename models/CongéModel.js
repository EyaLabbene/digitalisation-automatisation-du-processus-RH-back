const  mongoose=require('mongoose');
const Schema = mongoose.Schema;


const CongeSchema=new Schema({
    date_début:{ type: Date, required: true },
    date_fin:{ type: Date, required: true },
    cause :{ type: String, required: true }
},
{ timestamps: true ,});




module.exports=mongoose.model('congé',CongeSchema);
