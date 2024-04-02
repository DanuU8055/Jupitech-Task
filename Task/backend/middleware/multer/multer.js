import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public"); // set the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // set a unique filename for each uploaded file
  },
});

const upload = multer({ storage: storage });
export default upload
