const cloudinary = require("../../utils/Cloudinary");

const getLast30DaysCreditUsage = async (req, res) => {
  try {
    const usageData = await cloudinary.api.usage();
    const storageusage = usageData.storage;
    const overall = storageusage.credits_usage * storageusage.usage;
    const final = overall / 1024;
    res.json({ final });
  } catch (error) {
    console.error("Error fetching Cloudinary usage data:", error.message);
    res.status(500).json({ error: "Failed to retrieve usage data" });
  }
};

module.exports = { getLast30DaysCreditUsage };
