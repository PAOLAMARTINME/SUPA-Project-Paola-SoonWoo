const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    api_url: process.env.CLOUDINARY_URL
})

// ADMIN GALLERY
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'SUPA Project',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadCloud = multer({
    storage: storage
})

// USER GALLERY
const storageClient = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'SUPA Project Client',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadCloudClient = multer({
    storage: storageClient
})

module.exports = uploadCloudClient
module.exports = uploadCloud