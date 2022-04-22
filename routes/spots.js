import { Router } from 'express'
import * as spotsCtrl from '../controllers/spots.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.get('/', checkAuth, spotsCtrl.index)

export {
  router
}