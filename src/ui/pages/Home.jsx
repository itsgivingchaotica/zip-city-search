import React, { useEffect, useRef} from 'react'
import { com } from "../../ui"
import '../../styles/logo.css'

export default function Home() {

    return (
        <div>
        <div id="logo-animate">
            <div className="animation">
            <com.AnimatedHeader text="Find exactly where you're looking for!"/>
            </div>
        </div>
        <div style={{transform:'translateY(50%)',display:'flex'}}>
        <com.SearchForm />
        </div>
        </div>
    )
        
}