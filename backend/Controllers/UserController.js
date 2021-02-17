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
 * handle the update request
 */
const update=(req,resp,next)=>
{
    
    // define a array of parameteres that we will use for first Parameterized Query (select query)
    let sql=[req.body.email];
    // prepare the Parameterized Query
    const selectquery = "SELECT * FROM users WHERE email= $1";
    // execute the Parameterized Query
    client.query(selectquery, sql).then(res => {
        if(res.rowCount!=0)
        {// the user is already exist
          // define a array of parameteres that we will use for first Parameterized Query (Update query)
          let sql2=[req.body.email,req.body.last_name,req.body.first_name,req.body.country,req.body.city,req.body.phonenumber]; 
          // prepare the Parameterized Query
          const updatequery = "UPDATE users SET first_name= $3,last_name=$2,phone_number= $6,country= $4,city= $5 WHERE email =$1";   
          // execute the Parameterized Query
          client.query(updatequery,sql2).then(resu =>
          {
              
            resp.json({message : "Changes have been made successfully"});
          
          }).catch(err=>{// an error occurred while trying to connect to the database
            resp.json({err})
          })
        }else
        {
          resp.json({message:"Email address does not exist"});
        } 
      }).catch(err=>{// an error occurred while trying to connect to the database
        resp.json({err})
      });
    
} 
module.exports={update}