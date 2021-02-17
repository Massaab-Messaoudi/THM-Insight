/**
 * in this conytainer we manage la connextion 
 * with the data base and also we do handle 
 * the requests comming from the client
 */
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
 * this method allow us 
 * to show the rows of users table
 */
const index=(req,resp,next)=>
{
    
    client.query('select * from users',(err,res)=>
    {
        if(!err)
        {
           
             resp.json({res});
             
        }
        else
        {
            console.log(err.message);
        }
    
    })
}
/**
 * handle the update request
 */
const update=(req,resp,next)=>
{
 
    let email =req.body.email;
    let last_name=req.body.last_name;
    let first_name =req.body.first_name;
    let country=req.body.country;
    let city=req.body.city;
    let phonenumber=req.body.phonenumber;
    // first we need to make sure the the user is already exist
    client.query(`select * from users where email ='${email}' `,(err,res)=>
    
    {
     if(!err)
     {// the select request have been made successfully
         
          if(res.rowCount!=0)
          {// the user is already exist
            client.query(`UPDATE users SET 
            first_name= '${first_name}',
            last_name= '${last_name}',
            phone_number= ${phonenumber},
            country= '${country}',
            city= '${city}' 
            WHERE email = '${email}' `,(err,res)=>
            
            {
             if(!err)
             {// the changes have been made successfully
                
                  resp.json({message : "Changes have been made successfully"});
                 
                  
             }
             else
             { // an error has occurred whe we try to send update th data base
                 resp.json({err});
             }
            })
          }else
          {
            resp.json({message:"User does not exist"});
          } 
                   
     }
    
    })
    
} 
module.exports={index,update}