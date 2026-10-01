# Express

Fast, unopinionated, minimalist web framework for Node.js

## Steps
1. Create project folder(Lab5)
2. Create two folder (frontend,backend) in root (Lab5)
3. Open terminal and reach to backend by

   ```
   cd ..
   cd Lab5
   cd backend
   ```
4. type `npm init -y`
5. install nodemon `npm i nodemon -d`
6. install express `npm i express`
7. update backend/package.json
   - change type `type:"module"`
   - change script
     ```

     script:{
        "start": "node app.js",
        "dev": "nodemon prg1.js"
     }    
     ```
  8. add `Lab5/backend/node_modules` to .gitignore
  9. create `prg1.js` in backend
  10. write the script below to start express server

      ```
      import express from 'express'

      const app = express();

      app.get("/", (req, res) => {
      res.send("Hello express");
    });


     // this line must be last line 👇
      app.listen(4444, () => console.log("prg1.js is running on port 4444"));
      ```
