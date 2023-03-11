import {React, useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            
            setError("Failed to login in")
        }

        setLoading(false)
    }

    return (
        <div className='row justify-content-md-center mt-5'>
            <div className='col col-md-6'>
                <Card>
                <Card.Body className='p-5'>
                    <h2 className="text-center mb-4">Login In</h2>
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
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Log In</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        Don't have an account? <Link to="/signup"> Sign Up </Link>
                    </div>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}
