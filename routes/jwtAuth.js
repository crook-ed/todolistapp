const router = require("express").Router();
const users  = require("../database.js");
const bcrypt = require("bcrypt");


//registering
router.post("/register", async (req, res) => {
    
    
    
    try {
        
        //destructure the req.body (user , emnail, password)
        const {name , email, password} = req.body;

        //check if user exist(if user exist throw error)
        // const user = await pool.query("SELECT * FROM users WHERE user_email = $1" , [email]);
        const user = await users.findOne({
            where: {
              user_email: email,
            },
          });

        if(user){
            return res.status(401).send("User already exists"); 
        }

        //Bcrypt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password , salt);
        // console.log(bcryptPassword);
        // //enter the new user inside our database
        const newUser = await users.create({
            user_name: name,
            user_email: email,
            user_password: bcryptPassword,
            // Add other user properties here
          });
        // const newUser = await pool.query
        // ("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *" , [name, email, bcryptPassword]);
        //generating our jwt token
        res.json(newUser);
        // res.json(user.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


module.exports = router;