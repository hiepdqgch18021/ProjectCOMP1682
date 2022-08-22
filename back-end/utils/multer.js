const path = require('path');
const multer = require('multer');

// Multer config
module.exports = multer({
    storage: multer.diskStorage({}), 
    fileFilter:(req,file,cb)=>{
        console.log(file)
        if(!file.mimetype.startsWith('image/')){
         cb(new Error('Invalid file extension'),true);
    }
    cb(null, true);
},
})


















