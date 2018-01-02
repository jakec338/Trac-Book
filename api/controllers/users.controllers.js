var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports.register = function(req, res){
    console.log('registering user');

    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var age = req.body.age;
    var genres = req.body.genres;

    User.create({
        email: email,
        username: username,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        age: age,
        genres: genres
    }, function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('user created', user);
            res.status(201).json(user);
        }
    });

};


module.exports.login = function(req, res){
     console.log('logging in user');
     var username = req.body.username;
     var password = req.body.password;

     User.findOne({
         username: username
     }).exec(function(err,user){
         if(err){
             console.log(err);
             res.status(400).json(err);
         } else{
             if(bcrypt.compareSync(password, user.password)){
                console.log('User found', user);
                var token = jwt.sign({ username: user.username }, 's3cr3t', {expiresIn: 3600});
                res.status(200).json({success: true, token: token});
             } else {
                 res.status(401).json('Unauthorized');
             }
            
         }
     })
};


//Check if the token is valid
module.exports.authenticate = function( req, res, next){
    var headerExists = req.headers.authorization;
    if(headerExists){
        var token = req.headers.authorization.split(' ')[1]; //->Authorization Bearer xxx
        jwt.verify(token, 's3cr3t', function(error, decoded){
            if( error){
                console.log(error);
                res.status(401).json('Unauthorized');
            } else{
                req.user = decoded.username;
                next();
            }
        });
    } else {
        res.status(403).json('No token provided');
    }
};