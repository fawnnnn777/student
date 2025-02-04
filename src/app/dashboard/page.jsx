import Link from "next/link";
import { montserrat, raleway } from "../fonts";

export default function Page(){
    return (
        <div className="text-center bg-background h-screen">
            <h1 className={`${montserrat.className} text-3xl p-7`}>What do you want to practice?</h1>
            <div className="text-white bg-yellow-200 flex flex-col text-2xl
            rounded-2xl mx-5 h-content mb-5 overflow-scroll
            ">
                <Link className={`${raleway.className} text-2xl bg-black border-2 p-5 m-3 border-black rounded-2xl drop-shadow-lg`} href='/dashboard/pronunciation'>PRONUNCIATION</Link>
                <Link className={`${raleway.className} text-2xl bg-black border-2 p-5 m-4 border-black rounded-2xl drop-shadow-lg`} href='/dashboard/grammar'>GRAMMAR</Link>
                <Link className={`${raleway.className} text-2xl bg-black border-2 p-5 m-4 border-black rounded-2xl drop-shadow-lg`} href='/dashboard/intonation'>INTONATION</Link>
                <Link className={`${raleway.className} text-2xl bg-black border-2 p-5 m-4 border-black rounded-2xl drop-shadow-lg`} href='/dashboard/fluency'>FLUENCY</Link>
                <Link className={`${raleway.className} text-2xl bg-black border-2 p-5 m-4 border-black rounded-2xl drop-shadow-lg`} href='/dashboard/more'>MORE</Link>
            </div>
        </div>
    )
}