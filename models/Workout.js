const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercise: [
    {
      type: {
        type: String,
        required: true
      },
    
      name: {
        type: Number,
        unique: true,
        required: true
      },
    
      duration: {
        type: Number,
        required: true
      },
    
      weight: {
        type: Number,
        required: true
      },
    
      reps: {
        type: Number,
        required: true
      },
    
      sets: {
        type: String,
        required: true
      }
    }
  ],

  day: {
    type: Date, 
    default: Date.now
  } 

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;