const cloudinary = require("../../utils/Cloudinary");

const totalUploads = async (req, res, next) => {
  try {
  
    const usageData = await cloudinary.api.usage();
    const totalUploadsCount = usageData.resources || 0; 

    res.json({ totalUploads: totalUploadsCount });
  } catch (error) {
    console.error("Error fetching Cloudinary usage data:", error.message);
    res.status(500).json({ error: "Failed to retrieve usage data" });
  }
};

module.exports = totalUploads ;
