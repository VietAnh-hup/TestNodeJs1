var mongoose = require('mongoose');
var WorkSchema = new mongoose.Schema({
    name: String,
    status: Number
}
)

module.exports = mongoose.model('WorkSchema' , WorkSchema)