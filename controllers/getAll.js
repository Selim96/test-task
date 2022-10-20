const { User } = require("../models");

const getAll = async (req, res) => {
    
    const result = await User.find({}, "-createdAt -updatedAt").populate("name");
    
    res.json(result);
}

module.exports = getAll;