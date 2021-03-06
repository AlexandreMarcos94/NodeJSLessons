import express from 'express'
import { auth } from './auth/index.mjs'
import { add, getAll, getByName, remove } from './products.mjs'
//import auth from './auth/index.mjs'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('/products/name => un produit spé & /products => tout les produits')
})

router.get('/products', (_, res) => {
    res.send(getAll())
})

router.get('/products/:name', (req, res) => {
    const name = req.params.name
    res.send(getByName(name))
})

router.post('/products', (req, res) => {
    const { name, quantity } = req.body
    add(name, quantity)
    res.send('ajout ok')
})

router.post('/auth', (req, res) => {
    const { name, password } = req.body
    const resu = auth(name, password)
    res.send(resu)
})

router.delete('/products/:name', (req, res) => {
    let quantity = 0
    const name = req.params.name
    if (req.query.quantity) {
        quantity = req.query.quantity
        const check = remove(name, quantity)
        if (check) {
            res.send('delete success')
        } else {
            res.send('check name or quantity')
        }
    } else {
        res.send('cant delete without quantity')
    }
})

export default router
