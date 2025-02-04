'use client'

import { montserrat, raleway } from "@/app/fonts"
import Dropdown from "@/app/ui/Dropdown"
import { usePathname } from "next/navigation"

export default function SectionPage(){

    const pathname = usePathname()
    const section = pathname.split('/').pop()
    if(!section){
        return <div>Loading...</div>
    }


    return(

        <div className="bg-background h-screen">
            <h1 className={`${montserrat.className} text-3xl text-center p-5`}>{section.charAt(0).toUpperCase() + section.slice(1)} Practice</h1>
            <div className={`${raleway.className} className="text-white bg-yellow-200 flex flex-col text-2xl
            rounded-2xl mx-5 h-content mb-5 overflow-scroll
            `}>
                <Dropdown level={'BASIC'} content=''></Dropdown>
                <Dropdown level={'INTERMEDIATE'} content=''></Dropdown>
                <Dropdown level={'ADVANCED'} content=''></Dropdown>
            </div>
        </div>
    )
}