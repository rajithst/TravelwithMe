/**
 * Created by rajith on 3/7/17.
 */


const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;
var fs = require('fs');
var blogSchema = new schema({

    userid:{type:String},
    postTtile:{type:String},
    body:{type:String},
    dateAdded:{type:String}
});



const Blogtab =  module.exports = mongoose.model('Blogtab',blogSchema);

module.exports.addBlogpost = function (Stu,callback) {

    var dt=new Date();
    var text = "featured_image_";
    var pos=Stu.student_img.indexOf(",");

    var base64d=Stu.student_img.substring(pos+1);
    var path="./uploads/images/blog/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
            return console.log(err);
        }

    });

    //blogdata.save(callback);
};