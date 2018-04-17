const mongoose = require('mongoose');
const schema = mongoose.schema;
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        lowercase:true
    },
    age:Number
});  

const user = mongoose.model('User',userSchema);

module.exports = user;