const router = require("express").Router();
const users  = require("../database.js");
const authorization = require("../middleware/authorization.js");


router.get("/", authorization , async (req, res) => {
    try {
        // res.json(req.user);
        const user = await users.findOne({
            where: {
              id: req.user.id,
            },
            attributes: ['user_name'],
          });

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})


module.exports = router;