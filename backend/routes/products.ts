import {request, response, Router} from 'express'
import fakeData from '../models/fakeData'
const router = Router()

router.get('/', (request, response) => {
    response.json(fakeData)
})

export default router