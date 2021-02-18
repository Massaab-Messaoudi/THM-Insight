/* * in this conytainer we manage la connextion 
 * with the data base and also we do handle 
 * the requests comming from the client
 * i use the Parameterized Query to store the data in the data base 
 * to prevent against the risk of SQL injection
 */
const express=require('express');
const bodyparser =require('body-parser');
var formidable = require('formidable');
const {Client} = require('pg');
/**  creating of client and setup the configuration de la 
 * connection with tha data base
*/
const client = new Client({
host:"database",
port:5432,
user:"thminsight",
password:"coding_test_password",
database:"thm_database"
}) 
// connect to the data base
client.connect();
/**
 * handle the update request
 */
const update=(req,result,next)=>
{
  var form = new formidable.IncomingForm();

  // form.parse analyzes the incoming stream data, picking apart the different fields and files for you.

  form.parse(req, function(err, fields, files) {
    if (err) {

      // Check for and handle any errors here.

      result.json({err});
      
    }
   
    let sql=[fields.email];
    // prepare the Parameterized Query
    const selectquery = "SELECT * FROM users WHERE email= $1";
    // execute the Parameterized Query
    client.query(selectquery, sql).then(resp => {
  
        if(resp.rowCount!=0)
        {// the user is already exist
          
          // check if the received data contains a profile picture
          if(typeof files.file == 'object'){// the received data contains a profile picture,so we have to store 7 param
          // define a array of parameteres that we will use for first Parameterized Query (Update query) 
          let sql2=[fields.email,fields.last_name,fields.first_name,fields.country,fields.city,fields.phonenumber,files];
          // prepare the Parameterized Query
          const updatequery = "UPDATE users SET first_name= $3,last_name=$2,phone_number= $6,country= $4,city= $5,img= $7 WHERE email =$1";
          // execute the Parameterized Query
          client.query(updatequery,sql2).then(res =>
            {
                
              result.json({message : "Changes have been made successfully"});
            
            }).catch(err=>{// an error occurred while trying to connect to the database
              result.json({err})})
            }
            else
            {//the received data does not contains a profile picture,,so we have to store 6 param
              // define a array of parameteres that we will use for first Parameterized Query (Update query) 
              let sql2=[fields.email,fields.last_name,fields.first_name,fields.country,fields.city,fields.phonenumber];
              // prepare the Parameterized Query
              const updatequery = "UPDATE users SET first_name= $3,last_name=$2,phone_number= $6,country= $4,city= $5 WHERE email =$1";
              //execute the Parameterized Query
              client.query(updatequery,sql2).then(res =>
                {
                    
                  result.json({message : "Changes have been made successfully"});
                
                }).catch(err=>{// an error occurred while trying to connect to the database
                  result.json({err})}) 
            }   
      
        }else
        {
          result.json({message:"Email address does not exist"});
        } 
      }).catch(err=>{// an error occurred while trying to connect to the database
        result.json({err})
      });

  }); 
} 
module.exports={update}