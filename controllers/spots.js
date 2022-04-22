import { Spot } from '../models/spot.js'

function index (req, res) {
  Spot.find({})
  .then(spots =>{
    res.json(spots)
  })
  .catch(err => {
    res.json(err)
  })
}

export {
  index
}