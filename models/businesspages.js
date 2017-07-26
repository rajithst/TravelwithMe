/**
 * Created by rajith on 3/3/17.
 */
/**
 * Created by rajith on 2/25/17.
 */

const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;

var businesspageSchema = new schema({

    userid:{type:Number},
    pagename:{type:String},
    email:{type:String},
    telephone:{type:String},
    website:{type:String},
    businesstype:{type:String},
    description:{type:String},
    location:{type:String}
});



const Bpage =  module.exports = mongoose.model('Bpage',businesspageSchema);

module.exports.addBpagedata = function (BusinessPage,callback) {

    BusinessPage.save(callback);
};

