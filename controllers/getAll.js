const { User } = require("../models");

const getAll = async (req, res) => {
    
    const result = await User.find({}, "-createdAt -updatedAt").populate("nickname");
    
    const data  = await User.find({});
    const dataLength = data.length;
    res.json({result, dataLength});
}

module.exports = getAll;