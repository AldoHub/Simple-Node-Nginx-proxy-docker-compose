const path = require("path");
let rootPath = path.join(__dirname, '../');//It goes three folders or directories back from given __dirname.




const postController = {
   getIndex: (req, res) => {
        res.sendFile(rootPath + "/index.html");
   },
   getServerIdentity: (req, res) => {
        return res.status(200).send({
            "message": "This is App Server One"
        })
   }
}

module.exports = postController;