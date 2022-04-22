import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = newSchema({
  comment: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
  },{
    timestamps: true
})

const spotSchema = new Schema({
  name: String,
  country: String,
  city: String,
  neighborhood: String,
  type: String,
  laptop: Boolean,
  outlets: Boolean,
  wifi: Boolean,
  tables: String,
  decor: String,
  music: String,
  price: Number,
  eats: String,
  reviews: [reviewSchema]
})

const Spot = mongoose.model('Spot', spotSchema)

export {
  Spot
}