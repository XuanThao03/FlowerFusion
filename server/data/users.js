import bcrypt from "bcrypt";
const users = [
  {
    firstname: "customer01",
    lastname: "lastcustomer01",
    email: "user01@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    firstname: "customer02",
    lastname: "lastcustomer02",
    email: "user01@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    firstname: "admin01",
    lastname: "lastadmin01",
    email: "user01@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];
export default users;
