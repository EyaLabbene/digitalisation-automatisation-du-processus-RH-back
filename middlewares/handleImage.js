const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const util = require("util");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), ".tmp"));
  },
  filename: function (req, file, cb) {
    let filename = `image_${Date.now()}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (/^image\/(png)|(jpe?g)$/.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("file problem"));
  }
};

const upload = util.promisify(multer({ storage, fileFilter }).single("image"));

const handleImage = async (req, res, next) => {
  try {
    await upload(req, res);
    if (req.file && req.file.fieldname === "image") {
      try {
        req.image = await sharp(req.file.path)
          .resize(300, 300, { fit: "inside" })
          .webp({ lossless: false, quality: 70 })
          .toBuffer();
        next();
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    if (error instanceof FileValidationError) {
      res.status(400).json({
        error: "FILE_MIMETYPE_UNSUPPORTED",
      });
    } else if (error instanceof multer.MulterError) {
      res.status(400).json({
        error: "FILE_UPLOADING",
        field: error.field,
        reason: error.code,
      });
    } else if (error) {
      res.sendStatus(500);
    }
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

module.exports = {
  handleImage,
};
