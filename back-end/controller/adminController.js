const Admin =require("../model/adminModel");

const typeController = {
    addType:async(req, res) => {
        try {
            const newType = new Admin({
                type:req.body.type,
                userID: req.user.id,
            })
            await newType.save();
            return res.status(200).json(newType);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getAllTypes: async(req,res)=>{
        try {
            const allTypes = await Admin.find()
            res.status(200).json(allTypes);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteType: async (req,res)=>{
        try {
            await Admin.findByIdAndDelete(req.params.id)
            res.status(200).json("delete Type success");
        } catch (error) {
            return res.status(500).json(error);

        }
    }
}
module.exports = typeController;




























