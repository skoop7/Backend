There are two types of import syntax or javascript syntax 

1. Module  -It works asynchronously

2. CommonJs -It works synchronously


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