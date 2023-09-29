const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const JobSchema = new Schema({
    title:String,
    description:String,
    deadline:String,
    author:{type:Schema.Types.ObjectId, ref:'User'}
}, {
    timestamps: true,
});

const JobModel = model('Job', JobSchema);

module.exports = JobModel