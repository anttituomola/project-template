// Tuodaan prisma client käyttöön
import prisma from "/lib/prisma"
import hashPassword from "/lib/auth"

const signupHandler = async (req, res) => {
    const data = req.body
    const { email, password } = data

    // Serveripuolen validointi
    if (!email || !email.includes("@") || !password) {
        return res.status(422).json({
            error: "Valid email and password are required"
        })
    }

    // Luodaan prisman avulla uusi käyttäjä tietokantaan
    const hashedPassword = await hashPassword(password)
    const user = await prisma.User.create({
        data: {
            email,
            password: hashedPassword,
        }
    })
    // Vastataan "uusi käyttäjä luotu" vastauksella
    res.status(201).json({
        user
    })
}

export default signupHandler
