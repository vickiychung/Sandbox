const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  isAnswered: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = Question = mongoose.model('Question', QuestionSchema);