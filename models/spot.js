import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const reviewSchema = new Schema({
//   comment: String,
//   rating: {type: Number, min: 1, max: 5, default: 5}
//   },{
//     timestamps: true
// })

const spotSchema = new Schema({
  name: {type: String},
  country: {type: String},
  city: {type: String},
  neighborhood: {type: String},
  //Determine what type the type field should be to make this a radio field.
  // type: {type: String},
  // laptop: {type: Boolean},
  // outlets: {type: Boolean},
  // wifi: {type: Boolean},
  // tables: {type: String},
  // decor: {type: String},
  // music: {type: String},
  // price: {type: Number},
  // food: {type: String},
  // reviews: [reviewSchema]
})

const Spot = mongoose.model('Spot', spotSchema)

export {
  Spot
}