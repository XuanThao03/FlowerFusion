import bcrypt from "bcrypt";
const users = [
  {
    firstname: "One",
    lastname: "Number",
    email: "user01@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    firstname: "Two",
    lastname: "Number",
    email: "user02@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    firstname: "Three",
    lastname: "Number",
    email: "user03@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    firstname: "One",
    lastname: "Admin",
    email: "admin01@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
];
export default users;
