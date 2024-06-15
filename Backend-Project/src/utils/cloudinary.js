import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localfilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    console.log(
      "File has been uploaded to Cloudinary Successfully",
      response.url
    );
    return response.url;
  } catch (error) {
    fs.unlinkSync(localfilePath); // remove the locally saved file as the file has been uploaded failed
    return null;
  }
};

export { uploadToCloudinary };
