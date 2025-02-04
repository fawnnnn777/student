'use client'
import { useState } from "react"
import clsx from 'clsx'
import { raleway } from "../fonts"

export default function Dropdown({level, content}){

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div >
            <div className={`${raleway.className} text-center text-white text-2xl bg-black border-2 p-5 m-3 border-black rounded-2xl drop-shadow-lg`}>
                <button onClick={()=>setMenuOpen(!menuOpen)}>{level}</button>
            </div>
            <div className={clsx({'hidden': menuOpen == false}, 'text-center p-3')}>
                content
            </div>
        </div>
    )
}