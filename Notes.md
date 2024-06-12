There are two types of import syntax or javascript syntax 

1. Module  -It works asynchronously

2. CommonJs -It works synchronously

In HTML if we write script as type module then js will act in strict mode


PROXIES
=========================
It is use to standardize URL and make application production ready

It means that if you create proxy in vite config.js like this
```
server:{
    proxy:{
        '/api':'http://localhost:3000',
    }
}
```
server will think that request is coming from same origin and it should be allowed as server is running on 3000 and also this proxy will append this URL before '/api'

MONGODB
===========================
In mongoDb while saving Schema in DB its name gets in LowerCase and in Plural form

eg.User becomes users

In mongodb schema we can define like username:String but we also can define object and bydefault it will select first property as its default property and in object we can define multiple values
```
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
}
```
if yopu need the info about when user create the field and modified the field then use 
```
{timestamps:true}
```
it will automatically add 2 fields createdAt(), updatedAt()


If you are referincing any two table then 

export const User = mongoose.model("**User**",userSchema);

give the highlighted name as reference 

Example
```
createdBy:{
    type: mongoose.Schema.types.ObjectId,
    ref:"User"
}
```
In node we have access to process we can exit the process using 
```
process.exit(1);
```
To run anything experimental we use -r flag like this 
```
-r dotenv/config --experimental-json-modules
```

Whenever you write async code it will return promise also


App.use is generally used in middlewares 

Cookie-Parser is generally used for performing CRUD operation on users browser cookies

Middlewares are nothing but internediate functions filter which will check the request first before reaching it to the server

(err,req,res,next) here next is the flag which is used in middlewares and it will say that after completing his task go the next middleware

mongoDB generates ID on its own and save it in Bson data not in Json Data

pre Hooks are middlewares which are readymade by mongoose which helps in performing the action just before save
and just like pre there is a post hook to perform action just after save

**JWT**

JWT is a bearer token .It is like one who have it he will share the data to it


