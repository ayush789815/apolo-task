const Doctor = require('../models/Doctor');

// Add a new doctor
exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ success: true, data: doctor });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// List doctors with filters and pagination
exports.listDoctors = async (req, res) => {
  try {
    const { gender, language, minExperience, maxExperience, minFee, maxFee, location,availability, page = 1, limit = 10 } = req.query;
    
    const filter = {};
    
    if (gender) filter.gender = gender;
    if (language) filter.languages = { $in: [language] };
    if (location) filter.location = location;
    if (minExperience || maxExperience) {
      filter.experience = {};
      if (minExperience) filter.experience.$gte = parseInt(minExperience);
      if (maxExperience) filter.experience.$lte = parseInt(maxExperience);
    }
    if (minFee || maxFee) {
      filter.fees = {};
      if (minFee) filter.fees.$gte = parseInt(minFee);
      if (maxFee) filter.fees.$lte = parseInt(maxFee);
    }
    if (availability) filter.availability = { $in: [availability] };
    
    const doctors = await Doctor.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    
    const total = await Doctor.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      data: doctors,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};