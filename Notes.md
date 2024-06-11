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
