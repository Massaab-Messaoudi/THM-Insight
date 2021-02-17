const {Client} = require('pg');
const client = new Client({
host:"localhost",
port:5432,
user:"thminsight",
password:"coding_test_password",
database:"thm_database"
}) 
client.connect();
client.query("INSERT INTO users  (email,password,first_name) VALUES ('user-4-companies@cementys.com','f22ebd25bd26ece6c9c30841111a96a2af063531926d8ba511c7f3a0a08a2e63','user4'); INSERT INTO users  (email,password,first_name) VALUES ('user-5-company@cementys.com','043d989ad0f63a6a3878c8fe5af111278f1a2ecc6e93fdcb090ba0f38942639a','user5')",(err,res)=>
{
    if(!err)
    {
        console.log(res.rows);
    }
    else
    {
        console.log(err.message);
    }
    client.end();
})