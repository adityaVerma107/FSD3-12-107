//  we use in memory database
let users = [
    {
        id: 1, 
        name: "Amit Sharma", 
        mob: "684684xxxx", 
        email: "amit.example@gmail.com"
    },
    {
        id: 2, 
        name: "Shiva Yadav", 
        mob: "954684xxxx", 
        email: "shiva.example@gmail.com"}
];

let nextId = 3;

const getAllUsers = () => {
    return users;
}

const getUserById = (pid) => {
   const found = users.find((user)=>user.id === pid)
   return found;

}


export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
}