import { FaDev } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const nav = () => {

    const [toogle, setToogle] = useState (false);

    function openMenu() {
        setToogle(true);
    }
    function closeMenu() {
        setToogle(false);
    }
  return (
    <>
    <div className="flex justify-between items-center p-4 lg:flex-row">
        <div>
            <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center"><FaDev className="mr-2"/>Marcel</a>
        </div>
        <div className="flex gap-x-4">
            <div className='sm:hidden lg:block space-x-2'>
                <a href="#" className="text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl">Skills</a>
                <a href="#" className="text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl">Projects</a>
                <a href="#" className="text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl">About</a>
            </div>
            <div className="sm:block lg:hidden">
                {toogle ? (
                    <AiOutlineClose size={32} className="text-white text-3xl cursor-pointer lg:hidden" onClick={closeMenu}/>
                ) : (
                    <HiMenuAlt1 size={32} className="text-white text-3xl cursor-pointer lg:hidden" onClick={openMenu}/>
                )}
                
            </div>
        </div>
    </div>

    <div className="sm:block lg:hidden">
        {toogle ? (
           <div className="flex justify-between ml-10">
           <ul>
               <li className="text-white text-xl mb-2 cursor-pointer">Skills</li>
               <li className="text-white text-xl mb-2 cursor-pointer">Projects</li>
               <li className="text-white text-xl mb-2 cursor-pointer">About</li>
           </ul>
       </div> 
        ) : (
            <div></div>
        )}
        
    </div>
    </>
  )
}

export default nav