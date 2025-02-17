import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";

export const raleway = Raleway({subsets: ['latin'], weight: ['600'], fallback:['arial','system-ui']})
export const montserrat =Montserrat({subsets: ['latin'], weight: ['700'], fallback:['arial', 'system-ui']})