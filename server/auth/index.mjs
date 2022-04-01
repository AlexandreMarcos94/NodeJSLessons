import fs from 'fs'
import jwt from 'jsonwebtoken'

/**
 *
 * @param {string} name
 * @param {string} password
 */
const generatedAccessToken = (data) => {
    if(!data) return null

    delete data.password
    return jwt.sign(data, process.env.TOKEN, { expiresIn: '1800s'}, () => {
        console.log("Token créé avec succès")
    })
}
/**
 *
 * @param {string} name
 * @param {string} password
 */
const auth = (name, password) => {
    const file = fs.readFileSync('./auth/users.json', 'utf8')
    const users = JSON.parse(file)
    const user = users.find((u) => u.name === name && u.password === password)

    return generatedAccessToken(user)
}

export { auth }