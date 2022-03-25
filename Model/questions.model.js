const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Questions = new Schema({
    id:Number,
    description:String,
    tag:String,
    point: Number,
    options:[String]
});


module.exports = mongoose.model("Questions",Questions);


