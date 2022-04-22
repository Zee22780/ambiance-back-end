import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
})