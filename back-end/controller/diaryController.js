const cloudinary = require("../utils/cloundinary");

const {Diary} = require("../model/diaryModel");

const diaryController ={

    //add diary
    addDiary: async(req,res)=>{
        try {
            const diaryImage = await cloudinary.uploader.upload(req.file.path,{folder:"imageDiary"});
            console.log(diaryImage);
            let newDiary = new Diary({
                diaryTitle:req.body.diaryTitle,
                diaryDate: req.body.diaryDate,
                diaryContent: req.body.diaryContent,
                diaryPhotos: diaryImage.secure_url,
                cloudinaryID: diaryImage.public_id
            });
                await newDiary.save();
                res.status(200).json(newDiary);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    updateDiary: async (req, res)=> {
        try {
            const diary = await Diary.findById(req.params.id);
            await diary.updateOne({$set:req.body});
            res.status(200).json("update a Diary success");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllDiary: async (req, res)=> {
        try {
            const diary = await Diary.find();
            res.status(200).json(diary);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getOneDiary: async (req, res)=> {
        try {
            const diary = await Diary.findById(req.params.diaryId);
            res.status(200).json(diary);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteDiary: async (req, res)=> { 
        try {
            await Diary.findByIdAndDelete(req.params.diaryId);
            res.status(200).json("delete success");
        } catch (error) {
            return res.status(500).json(error);
        }
     }


};
module.exports = diaryController;



















