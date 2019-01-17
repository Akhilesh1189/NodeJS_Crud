const Note = require('../models/userModel.js');
var express = require('express');
var uniqid = require('uniqid');
var sql = require("mssql/msnodesqlv8");
var db = require('../config/database')();
var Validator = require('jsonschema').Validator;
var UserSchema = require('../config/schema.js');
var v = new Validator();
var router = express.Router();

exports.create = (req, res) => {
    if(!req) {
         return res.status(400).send({
              message: "Note content can not be empty"
        });
    }
    var Validator = require('jsonschema').Validator;
  var v = new Validator();
 var schema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
      "name": {"type": "string"},
     "lines": {
        "type": "array",
        "items": {"type": "string"}
      },
      "zip": {"type": "string"},
      "city": {"type": "string"},
      "country": {"type": "string"}
    },
      "votes": {"type": "integer", "minimum": 1}
    };
   var p = {
    "name": "Barack Obama",
    "address": {
      "lines": [ "1600 Pennsylvania Avenue Northwest" ],
      "zip": "DC 20500",
      "city": "Washington",
      "country": "USA"
    },
    "votes": "lots"
  };
 // var schema = {"type": "number"};
 var result = v.validate(p, schema);
  console.log('After JSON Validator:',result.errors);

        EmailID = req.body.EmailID;
        FirstName = req.body.FirstName;
        LastName = req.body.LastName;
        Address = req.body.Address;
        UserID = uniqid ();
        Password = req.body.Password;
        MobileNumber = req.body.MobileNumber
        FcmID = req.body.FcmID
        CreationDate = new Date();
        console.log('CreationDate:',CreationDate,UserID);
        //console.log(v.validate(UserSchema.User.addUsers, req));
    //     var validateData = v.validate(req, UserSchema.User);
    //   if (validateData && validateData.errors && validateData.errors.length) {
    //     console.log((validateData.errors, req));
    //   }
    //   else {
    //       console.log(null, req);
    //    // return callback(null, inputJSON);
    //   }
    
    db.connect().then(function() {
        db.query("INSERT INTO UserDetails (EmailID,FirstName,LastName,Address,UserID,FcmID,MobileNumber,Password) VALUES ('"+ EmailID +"','"+ FirstName +"','"+ LastName +"','"+ Address +"','"+ UserID +"','"+ FcmID +"','"+ MobileNumber +"','"+ Password +"')").then(function (data) {
               if(data) {
                db.close();
                return res.status(200).send({
                    message: "User Register",
                    status : 200

                });
            }
            }).catch(function(err) {
                db.close();
               console.log(err);
                    return res.status(400).send({
                        message: "Error",
                        status : 400
                    }); 
               
              });
            }).catch(function(err) {
                if (err) {
                  console.log('SQL Connection Error: ' + err);
                  db.close();
                }
              });
};



exports.login = (req, res) => {
    if(!req) {
        return res.status(400).send({
             message: "Note content can not be empty"
       });
    }
       EmailID = req.body.EmailID;
       Password = req.body.Password;
   db.connect().then(function() {
       db.query("SELECT * FROM UserDetails Where EmailID= '"+ EmailID +"' AND Password ='"+ Password +"'").then(function (recordSet) {
        if(recordSet) {
            db.close();
           // var jsonParsed = JSON.parse(JSON.stringify(recordSet));
            console.log("Retrive data from Database:",recordSet.recordset[0]);   
            return res.status(200).send({
                message: "user login sucessfully:"
            });
            db.close();
           } 
           }).catch(function(err) {
               console.log(err)
                   return res.status(400).send({
                       message: "Error"
                   }); 
               db.close();
             });
           }).catch(function(err) {
               if (err) {
                 console.log('SQL Connection Error: ' + err);
                 db.close();
               }
             });
};
exports.updateContactlist = (req, res) => {
    
    if(!req) {
        return res.status(400).send({
             message: "Note content can not be empty"
       });
    }
       EmailID = req.body.EmailID;
       Password = req.body.Password;
   db.connect().then(function() {
       db.query("SELECT * FROM UserDetails Where EmailID= '"+ EmailID +"' AND Password ='"+ Password +"'").then(function (recordSet) {
        if(recordSet) {
            db.close();
           // var jsonParsed = JSON.parse(JSON.stringify(recordSet));
            console.log("Retrive data from Database:",recordSet.recordset[0]);   
            return res.status(200).send({
                message: "user login sucessfully:"
            });
            db.close();
           } 
           }).catch(function(err) {
               console.log(err)
                   return res.status(400).send({
                       message: "Error"
                   }); 
               db.close();
             });
           }).catch(function(err) {
               if (err) {
                 console.log('SQL Connection Error: ' + err);
                 db.close();
               }
             });
};