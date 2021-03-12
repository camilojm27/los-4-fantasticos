import {request, response, Router} from 'express'

const router = Router()

router.get('/', (request, response) => {
    response.json({hola: 'Mundo'})
})

export default router