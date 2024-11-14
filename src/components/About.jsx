import aboutImg from "../assets/about.JPG";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";


const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
         whileInView={{opacity:1,y: 0}}
         initial={{opacity: 0,y:100}}
         transition={{duration:1.5}}
          className="my-20 text-center text-4xl">Ab<span className="text-neutral-400">ou</span><span className="text-neutral-500">t</span>
            <span className="text-neutral-600"> M<span className="text-neutral-700">e</span></span>
        </motion.h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img 
                    whileInView={{opacity:1,x:0}}
                    initial = {{opacity:0 ,x : -100}}
                    transition={{duration:0.5}}
                    className="w-96 rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial = {{opacity:0 ,x : 100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className=" my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default about