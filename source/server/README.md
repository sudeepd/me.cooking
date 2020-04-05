Setup

1) Install PostGress DB
2) Create a Database and Run Script https://github.com/dseventh/me.cooking/blob/master/database/init.sql
3) Modify config,js file with Database Credentials
4) Install Node JS

Run the command
```
cd source/server
npm install
npm start
```
The Server is configured to run at port 3000. https://github.com/dseventh/me.cooking/blob/master/source/server/bin/www#L15

Only the /users endpoint is implemented as of now.

The API routing is implemented in : https://github.com/dseventh/me.cooking/blob/master/source/server/routes/users.js
API Definitions imporeted from Swagger : https://github.com/dseventh/me.cooking/blob/master/source/server/api/openapi.yaml

After the server is started you can test using postman or cURL. Some examples

Add-User
```
 curl -X POST http://localhost:3000/users --header "Content-Type:application/json" -d '{"email":"email@gmail.com", "phone":"4089764255"}'
```

Get-User
```
curl  http://localhost:3000/users/17
```

Modify-User
```
curl -X PATCH http://localhost:3000/users/17 --header "Content-Type:application/json" -d '{"email":"email1@gmail.com", "phone":"3089764255"}'
```

Delete-User
```
curl -X DELETE http://localhost:3000/users/17
```
 
 
 


