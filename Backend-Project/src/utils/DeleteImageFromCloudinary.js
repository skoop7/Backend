import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError.js";

const deleteFromCloudinary = async (imageURL) => {
  try {
    const publicId = extractPublicIdFromUrl(imageURL);
    if (!publicId) {
      throw new ApiError(400, "Invalid image url");
    }

    const response = await cloudinary.uploader.destroy(publicId, {
      resource_type: "auto",
    });

    if (result.result !== "ok") {
      throw new ApiError(400, "Failed to get URL from Cloudinary");
    }
    console.log("Image deleted from Cloudinary successfully");
    return true;
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    return false;
  }
};

const extractPublicIdFromUrl = (url) => {
  try {
    const regex = /\/([^/]+)\.(jpg|jpeg|png|gif|webp|svg|bmp|tif|tiff)$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  } catch (error) {
    console.error("Error extracting public ID from URL:", error);
    return null;
  }
};

export { deleteFromCloudinary };
