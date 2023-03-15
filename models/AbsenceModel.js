const  mongoose=require('mongoose');
const Schema = mongoose.Schema;

const AbsenceSchema = new Schema ({
    nom_employee:{type:String,required: true},
    justification:{type:String,required:true}

},
{ timestamps: true ,})




module.exports=mongoose.model('absence',AbsenceSchema);