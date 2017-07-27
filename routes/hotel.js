const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Bpage = require('../models/businesspages');
const Room = require('../models/rooms');

router.get('/gethoteldata/:id',function(req,res){

      Bpage.getpagedata(req.params.id,(err,docs)=>{

                if (err){
                    throw err
                }

                if (docs){

                     res.json({docs})
                }

            })

})

router.get('/getroomdata/:id',function(req,res){

      Room.getroomdata(req.params.id,(err,docs)=>{

                if (err){
                    throw err
                }

                if (docs){

                     res.json({docs})
                }

            })

})



router.get('/pages/:id',function(req,res){

      Bpage.getpages(req.params.id,(err,docs)=>{

                if (err){
                    throw err
                }

                if (docs){

                     res.json({docs})
                }

            })

})

router.post('/addRoom',function(req,res){


     const room = new Room({

     uid:req.body.uid,
     pageId:req.body.pageId,
     roomname:req.body.roomname,
     price: req.body.price,
     size:req.body.size
    });

   console.log(room)
    

    
    Room.addRoom(room,(err,callback)=>{

        if (err){
            res.json({alert:"btn btn-danger",msg:"Failed to submit the post"});
        }else{
            res.json(callback);
        }

    })
    
    
});








module.exports = router;