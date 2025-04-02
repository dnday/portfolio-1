import HeroPic from "../assets/self2.jpg"
import Resume from "../assets/CV_Marcelinus Dinoglide Yoga Prakoso.pdf"
import { useState, useEffect } from 'react';
const hero = () => {
return (
        <section id="home" className="h-screen flex justify-around items-center p-10 lg:p-20 lg:space-x-10 lg:flex-row flex-col space-y-10 text-white ">
                <div className="lg:w-1/3 w-full">
                        <p className="text-4xl font-weight-300 mb-4">I'm</p>
                        <TypedText />
                </div>
                <div className="lg:w-[250px] w-full flex justify-center items-center">
                        <img src={HeroPic} alt="The Picture of Developer" width={150} height={150} className="w-full max-w-[250px] border-3 border-white rounded-full drop-shadow-lg"/>
                </div>
                <div className="lg:w-1/3 w-full">
                        <p className="text-4xl font-bold mb-4">About Me</p>
                        <p className="font-inter text-lg mb-4">
                                I'm a web developer based in Indonesia. I have a passion for web development and love to create new things.
                        </p>  
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-500 font-bold rounded-full px-6 py-2 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out">
                                Download Resume
                        </a>
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

