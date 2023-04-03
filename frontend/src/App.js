import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [meal, setMeal] = useState('')
    async function fetchRandomMeal() {
        try {
            const response = await axios.get(
                'http://localhost:3001/api/getRandomMeal'
            )
            setMeal(response.data.name)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchRandomMeal()
    }, [])

    return (
        <div className="App">
            <h1>Today's menu</h1>
            <h2>{meal}</h2>
        </div>
    )
}
export default App
