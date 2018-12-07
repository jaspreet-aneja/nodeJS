var connection = require('../con_utility');
var express = require('express');
var router = express.Router();

router.get('/getAllStudents', (req, res)=>{
    connection.query('select * from students', function(err, result){
        if(err)
            res.send(err);
        res.send(result);
    });
});

router.get('/getStudent/:id', (req, res)=>{
    connection.query('select * from students where id = '+req.params.id, function(err, result){
        if(err)
            res.send(err);
        res.send(result);
    });
});

router.post('/insert', (req, res)=>{
    connection.query('insert into students values('+req.body.id+', \''+req.body.name+'\', '+req.body.mobile+')', (err, result)=>{
        if(err)
            res.send(err);
        res.send('saved successfuly');
    });
});

router.put('/update', (req, res)=>{
    connection.query('update students set name=\''+req.body.name+'\', mobile=\''+req.body.mobile+'\' where id='+req.body.id, (err, result)=>{
        if(err)
            res.send(err);
        res.send('updated successfuly');    
    });
});

router.delete('/delete', (req, res)=>{
    connection.query('delete from students where id='+req.body.id, (err, result)=>{
        if(err)
            res.send(err);
        res.send('deleted successfully');
    });
});

module.exports = router;