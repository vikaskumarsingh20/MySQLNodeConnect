const db = require("../config/database");

const getStudents = async (req,res) =>{
try {

    const data = await db.query('SELECT * FROM Students')
    if(!data){
        return res.status(404).send({
            success:false,
            message:"No Record Founds",
            data
        })
    }
    return res.status(200).send({
        success:true,
        message:"All Students Records",
        data
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in get All students API",
        error
    })
}
};

module.exports = getStudents;

