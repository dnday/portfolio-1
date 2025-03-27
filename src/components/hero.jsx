import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs"
import HeroPic from "../assets/billie.jpg"
import { useState, useEffect } from 'react';
const hero = () => {
return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row sm:flex-col space-y-10 text-white">
                        <div className="lg:w-1/3 sm:w-fit">
                                        <p className="text-4xl font-weight-300 mb-4">I'm</p>
                                        <TypedText />
                        </div>
                        <div className="lg:w-1/3 sm:w-fit flex justify-center items-center">
                                        <img src={HeroPic} alt="The Picture of Developer" width={150} height={150} className="flex rounded-full w-3/4 border-4 border-white justify-center"/>
                        </div>
                        <div className="lg:w-1/3 sm:w-fit">
                                        <p className="text-4xl font-bold mb-4">About Me</p>
                                        <p className="text-slate-300">
                                                        Hi, I'm Marcelinus Dinoglide. I'm a web developer based in Indonesia. I have a passion for web development and love to create new things. I'm currently looking for a job as a web developer. If you have any job offers, please contact me.
                                        </p>
                                        <button className="bg-white text-indigo-700 px-10 py-2 rounded-full mt-3 hover:bg-indigo-900 hover:text-white">
                                                        Show More...
                                        </button>
                                        <div className="flex mt-5 space-x-5 cursor-pointer"> 
                                                <BsInstagram size={42} className="rounded-full border-2 border-indigo-700 hover:border-white hover:bg-indigo-900 transition duration-300"/>
                                                <BsTwitterX size={42} className="rounded-full border-2 border-indigo-700 hover:border-white hover:bg-indigo-900 transition duration-300"/>
                                                <BsLinkedin size={42} className="rounded-full border-2 border-indigo-700 hover:border-white hover:bg-indigo-900 transition duration-300"/>
                                        </div>
                        </div>
        </section>
)

// Typing animation component
function TypedText() {
        const [text, setText] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);
        const [loopNum, setLoopNum] = useState(0);
        const [typingSpeed, setTypingSpeed] = useState(150);
        
        const phrases = ["Marcelinus Dinoglide", "a Web Developer", "a Learner"];
        
        useEffect(() => {
                const timer = setTimeout(() => {
                        handleType();
                }, typingSpeed);
                
                return () => clearTimeout(timer);
        }, [text, isDeleting, loopNum, typingSpeed]);
        
        const handleType = () => {
                const i = loopNum % phrases.length;
                const fullText = phrases[i];
                
                setText(isDeleting 
                        ? fullText.substring(0, text.length - 1) 
                        : fullText.substring(0, text.length + 1)
                );
                
                setTypingSpeed(isDeleting ? 75 : 150);
                
                if (!isDeleting && text === fullText) {
                        setTimeout(() => setIsDeleting(true), 2000);
                } else if (isDeleting && text === '') {
                        setIsDeleting(false);
                        setLoopNum(loopNum + 1);
                }
        };
        
        return <h1 className="text-6xl font-bold">{text}<span className="text-indigo-400 animate-pulse">|</span></h1>;
}
}

export default hero