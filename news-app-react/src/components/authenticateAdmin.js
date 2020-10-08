import React from 'react'
import { useState } from 'react'

const authenticateAdmin = () => {

    const [secretKey, setKey] = useState("")

    return (
        <div>
            <label>Enter Secret Key</label>
            <input 
                type="text"
                name={state.input}
                onChange={() => setKey(secretKey)}
             />
        </div>
    )
}

export default authenticateAdmin