# NPM Project
1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script {
    "start": "node app.js",
    "dev": :nodemon prg7.js"
}
```
7. add node_modules to .gitignore
8. to run use `npm run dev`

## REST API
- major backend server return only data not html file
- REST API uses (get, post, put, patch, delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postma, thunder client, echo api, etc.
 - app crashed error meaning code error disconnect or vs code restart.
  #Request type

  1. GET-> get all , get by id
  2. POST-> /api/products (an data will be shared by echo api body section).
  3. PUT/PATCH -> /api/products/201 (id and body both will be used)
  4. Delete -> /api/products/110
