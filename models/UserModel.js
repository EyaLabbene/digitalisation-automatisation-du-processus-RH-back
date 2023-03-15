const  mongoose=require('mongoose');
const Schema = mongoose.Schema;

const UserSchema=new Schema({

    nom :{ type: String, required: true },
    Prenom :{ type: String, required: true },
    role:{ type: String, required: true },
    adresse:{ type: String, required: true },
    dateNaissance:{ type: Date, required: true },
    Username: { type: String, required: true },
    password:  { type: String, required: true }},
   { timestamps: true ,}
);

module.exports=mongoose.model('user',UserSchema);
