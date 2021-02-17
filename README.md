- Clone the repository 
- Install Docker Compose
- Open the cmd inside the projet "frontend" and run the command : docker-compose up --build  
- Open the cmd inside the projet "backend" and run the command : docker-compose up --build 
- frontend app will be running on the port 3006 and the backend app on the port 3000
- To make sure the data is properly inserted into the database ...open new terminal and run the command "node dat.js" inside the folder "/backend " (make sure that the backend app is already running),if you run this script you will add 2 new users to the database, one with email =user-4-companies@cementys.com and the second with email=user-4-companies@cementys.com, you can use them to test the app (settings page)
- After running both apps frontend/backend (in setp 2),Open http://localhost:3006  in the browser.
- To be able to modify the information of any user, you must use an address email that exists in the database (email of an existing user )
- Open the Menu bar and go to Settings page to test the Settings page

