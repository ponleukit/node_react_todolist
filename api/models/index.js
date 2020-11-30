const mongoose = require('mongoose');
const { Schema } = require('mongoose');
  const blogSchema = new Schema({
    title:  {
      type: String,
      require: true
    },
    des: {
      type: String,
      require: true
    },
    date: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Blog', blogSchema);