import { Router } from 'express'
import * as spotsCtrl from '../controllers/spots.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.get('/', spotsCtrl.index)

export {
  router
}