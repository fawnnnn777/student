'use client'

import Image from "next/image"
import { montserrat, raleway } from "./fonts"
import { useRouter } from "next/navigation"

export default function Page(){

    const route = useRouter()

    const handle = () =>{
        route.push('login')
    }

    return(
        <div>
            <div className="flex flex-col items-center">
            <Image className="border-box m-5" src="/2.png" width={200} height={300} alt="logo"></Image>
            <h1 className={`${montserrat.className} antialised text-5xl`}>Welcome!</h1>
            </div>
            <div className={`${raleway.className} flex items-center flex-col `}>
            <p className="text-2xl text-center p-5">¡Bienvenido a la plataforma estudiantil de Coach Diego!</p>
            <button className="p-5 border-2 border-transparent bg-indigo-500 hover:bg-indigo-500/75 text-white
            rounded-2xl shadow-xl
            "
            onClick={handle} 
            >Iniciar Sesion</button>
            </div>
        </div>
    )
}