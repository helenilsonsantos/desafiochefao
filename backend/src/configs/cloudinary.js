const cloudinary = require('cloudinary');
const upload = require('./uploads');
const dotenv = require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.uploads = (arquivo, pasta) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      arquivo,
      (cloudinaryReturn) => {
        resolve({
          url: cloudinaryReturn.url,
        });
      },
      {
        folder: pasta,
        resource_type: 'auto',
      }
    );
  });
};
