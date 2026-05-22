const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const storage = multer.diskStorage({

  destination:(req,file,cb)=>{

    cb(null,"uploads");

  },

  filename:(req,file,cb)=>{

    cb(null,Date.now()+"-"+file.originalname);

  }

});

const upload = multer({ storage });


// IMAGE UPLOAD
app.post(
  "/upload",
  upload.single("image"),
  (req,res)=>{

    res.json({
      success:true,
      path:req.file.path
    });

});


// SETTINGS SAVE
app.post("/settings",(req,res)=>{

  console.log(req.body);

  res.json({
    success:true
  });

});


app.listen(3000,()=>{

  console.log(
    "MEMOTIX running on port 3000"
  );

});
