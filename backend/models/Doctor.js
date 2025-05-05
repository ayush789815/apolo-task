const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  languages: {
    type: [String],
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  fees: {
    type: Number,
    required: true
  },
  availability: {
    type: [String],
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  },
  imageUrl: {
    type: String,
    default: '/images/default-doctor.jpg'
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  hospital: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);