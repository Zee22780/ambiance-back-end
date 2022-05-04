import { Router } from 'express'
import * as spotsCtrl from '../controllers/spots.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', spotsCtrl.index)
router.post('/', spotsCtrl.create)

export {
  router
}