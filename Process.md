1. create all folders 

2. install required dependencies 

3. setUp env file 

4. connect to DB from DB folder and execute it from index.js

5. Write express application configuration in the app.js

6. app.use(express.json({ limit: "16kb" })); this line is use for setting json data input limit

7. app.use(express.urlEncoded({extended:true,limit:"16kb"})) this is use for understanding data from url such saurabh%20Kobarne and extended is use for using nested objects

8. app.use(express.static("public")) this line is use for storing static assets such as pdf ,imgs on the server in the "Public" Folder

9. Make utils files which are going to be very frequently use

10. make models files for the project

11. whatever hooks you are using make it in models files 

12.