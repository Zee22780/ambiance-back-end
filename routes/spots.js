import { Router } from 'express'
import * as spotsCtrl from '../controllers/spots.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:id', spotsCtrl.show)
router.get('/', spotsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', spotsCtrl.create)
router.put('/:id', checkAuth, spotsCtrl.update)
router.delete('/:id', checkAuth, spotsCtrl.delete)

export {
  router
}