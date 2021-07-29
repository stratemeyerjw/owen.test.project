const express = require('express');


const router = express.Router();

//listen for a call to http://localhost:3000/testData
router.get('/testData',(req,res)=>{
    res.json(
        {
            "test": true, 
        
            "users": ["tom","dick","sally"], 
        
            "modifiedDate": new Date()
    });

});

//nuther example of a GET route
router.get('/testData2',(req,res)=>{
    res.json(
        {
            "test": false, 
        
            "users": ["bob","frank","jerry"], 
        
            "modifiedDate": new Date()
    });

});

module.exports = router;