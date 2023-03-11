import {React, useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import { createUserDocument } from "../firebase"

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            const { user } = await signup(emailRef.current.value, passwordRef.current.value)
            // console.log(user)
            await createUserDocument(user)
            navigate("/")
        } catch(err) {
            console.log(err)
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <div className='row justify-content-md-center mt-5'>
            <div className='col col-md-6'>
                <Card>
                <Card.Body className='p-5'>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className='py-2' onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Sign Up</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        Already have an account? <Link to="/login">Log In</Link> 
                    </div>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Signup