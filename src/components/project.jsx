import Proj1IMG from '../assets/Project1.png';
import Proj2IMG from '../assets/Project2.png';  // Assuming you have a second image
import Proj3IMG from '../assets/Project3.png';  // Assuming you have a third image

export default function Project() {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="font-sans font-bold text-4xl text-white mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-5">
            {/* Project 1 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex flex-col xl:flex-row gap-5">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Movie Recommendation Bot Twitter
                  </div>
                  <a href="#">Link Here</a>
                  <p className="mt-2 text-gray-500">
                    This is a movie recommendation bot from IMDB using Python and Twitter API.
                  </p>
                </div>
                <div className="md:shrink-0 flex justify-center items-center p-6">
                  <img src={Proj1IMG} alt="Movie Recommendation Bot" className="object-cover rounded-lg w-72 h-72 p-4"/>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex flex-col xl:flex-row gap-5">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Personal Finance Tracker
                  </div>
                  <a href="#">Link Here</a>
                  <p className="mt-2 text-gray-500">
                    A web application to track personal expenses and savings, built using React and Node.js.
                  </p>
                </div>
                <div className="md:shrink-0 flex justify-center items-center p-6">
                  <img src={Proj2IMG} alt="Personal Finance Tracker" className="object-cover rounded-lg w-72 h-72 p-4"/>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: If you want to add more projects, you can uncomment the following section */}
          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-5"> */}
            {/* Project 3 */}
            {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex flex-col xl:flex-row gap-5">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    E-commerce Web App
                  </div>
                  <a href="#">Link Here</a>
                  <p className="mt-2 text-gray-500">
                    An e-commerce platform to sell products, built with React, Redux, and Firebase.
                  </p>
                </div>
                <div className="md:shrink-0 flex justify-center items-center p-6">
                  <img src={Proj3IMG} alt="E-commerce Web App" className="object-cover rounded-lg w-72 h-72 p-4"/>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
