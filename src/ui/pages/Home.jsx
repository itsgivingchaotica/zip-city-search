import React from 'react'
import { com } from "../../ui"
import '../../styles/fonts.css'

export default function Home() {
    return (
        <div>
            <div className="animation">
            <com.AnimatedHeader text="Find exactly where you're looking for!"/>
            </div>
            <com.SearchForm/>
        </div>)
        
}