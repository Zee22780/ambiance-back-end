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

function create (req, res) {
  Spot.create(req.body)
  .then(spot => res.json(spot))
  .catch(err => res.json(err))
}

// function create(req, res) {
//   req.body.owner = req.user.profile
//   Spot.create(req.body)
//   .then(spot => res.json(spot))
//   .catch(err => {
//     console.log(err)
//     res.json(err)
//   })
// }

function update (req, res) {
  Spot.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(spot => res.json(spot))
  .catch(err => res.json(err))
}

function show(req, res) {
  Puppy.findById(req.params.id)
  .then(spot => res.json(spot))
  .catch(err => res.json(err))
}

function deleteSpot (req, res) {
  Spot.findByIdAndDelete(req.params.id)
  .then(spot => res.json(spot))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  update,
  show,
  deleteSpot as delete
}