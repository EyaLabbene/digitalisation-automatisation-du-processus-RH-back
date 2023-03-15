const  mongoose=require('mongoose');
const Schema = mongoose.Schema;


const ReunionSchema=new Schema({
    date_début:{ type: date, required: true },
    date_fin:{ type: date, required: true }
},
{ timestamps: true ,});




module.exports=mongoose.model('réunion',ReunionSchema);
