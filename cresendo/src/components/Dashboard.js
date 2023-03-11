import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  async function handleWaste() {

  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email : </strong> {currentUser.email}
          <div className='w-100 text-center mt-2'>
            <Button onClick={handleWaste}>Waste CLassification</Button>
          </div>
          <a href='http://127.0.0.1:5000/' target="_blank">Click here 1</a>
          <a href='http://127.0.0.1:5001/' target="_blank">Click here 2</a>
          {/* <div className='w-100 text-center mt-2'>
            <Button onClick={handleLogout}>Log Out</Button>
          </div> */}
          <div className='w-100 text-center mt-2'>
            <Button onClick={handleLogout}>Log Out</Button>
          </div>
        </Card.Body> 
      </Card>
    </div>
  )
}
