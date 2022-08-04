/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"
import styles from "/styles/login.module.css"
import { useSession } from "next-auth/react"


type Props = {}
const Login = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { data: session, status } = useSession()


    const submitHandler = async () => {
        if (isCreatingAccount) {
            try {
                const result = await createUser()
            } catch (error) {
                console.log(error)
            }
        } else {
            setEmail('')
            setPassword('')
            // Kutsutaan next-authin signIn-funktiota
            const result = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password
            })
            console.log(result)
        }
    }


    // Tämä funktio soittaa tekemäämme rajapintaan, joka puolestaan soittaa tietokantaan
    const createUser = async () => {
        setEmail('')
        setPassword('')
        setIsCreatingAccount(!isCreatingAccount)
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.message)
        }
        return data
    }

    if (session) {
        return <div className={styles.loginForm}>
        <h1>You are logged in!</h1>
        <h3 onClick={() => signOut()}>Log out!</h3>
        </div>
    }

    return (
        <div className={styles.loginForm}>
            <h1>{isCreatingAccount ? "Create account" : "Login"}</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event?.target.value)} />
            <label htmlFor="password">Password</label>
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event?.target.value)} />
            <img className={styles.hideIcon} src={showPassword ? "hide.png" : "show.png"}
                alt="Show or hide password" onClick={() => setShowPassword(!showPassword)} />
            <button onClick={() => submitHandler()}>{isCreatingAccount ? "Create account" : "Login"}</button>
            <div >
                {isCreatingAccount ?
                    <p className={styles.toggleSignin} onClick={() => setIsCreatingAccount(false)}>Already have account? Sign in instead!</p> :
                    <p className={styles.toggleSignin} onClick={() => setIsCreatingAccount(true)}>Don&apos;t have an account? Create one!</p>}
            </div>
        </div>
    )
}

export default Login
