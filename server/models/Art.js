const { Schema, model } = require('mongoose');


const artSchema = new Schema({
    artistAlphaSort: 
    {
      type: String,
    },
  
  title: {
    type: String,
    
  },
  // saved book id from API
  objectId: {
    type: String,
    required: true,
  },
  primaryImage: {
    type: String,
  },
  comments: [
    {
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }
  ]
  
},
{
    toJSON: {
      getters: true
    }
  }
);

const Art = model('Art', artSchema);

module.exports = Art;