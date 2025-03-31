import Proj1IMG from '../assets/Project1.png';
import Proj2IMG from '../assets/Project2.png';  // Assuming you have a second image
import Proj3IMG from '../assets/Project3.png';  // Assuming you have a third image

export default function Project() {
  return (
    <>
      <div className="m-20 mt-0 max-w-full rounded-2xl shadow-lg">
        <div className="grid justify-items-center m-10">
          <h1 className=" font-serif  text-7xl text-yellowg">Projects</h1>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-5">
            {/* Project 1 */}
            <div className="max-w-md mx-auto bg-greeno rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="flex flex-col xl:flex-row gap-5">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-yellowg font-semibold">
                    Movie Recommendation Bot Twitter
                  </div>
                  <p className="mt-2 text-black">
                    This is a movie recommendation bot from IMDB using Python, Tweepy, and IMDB API.
                  </p>
                  <p className='mt-4'>Python, Tweepy, IMDB API</p>
                  <a
                    href="https://github.com/dnday/movie-twitter-bot" target='_blank'
                    className="mt-4 inline-block px-6 py-2 border-2 bg-yellowg border-greeno text-black rounded-full hover:bg-blu hover:text-white transition duration-300 ease-in-out"
                  >Link Here</a>
                </div>
                <div className="md:shrink-0 flex justify-center items-center p-6">
                  <img src={Proj1IMG} alt="Movie Recommendation Bot" className="object-cover rounded-lg w-72 h-72 p-4"/>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="max-w-md mx-auto bg-indigo-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="flex flex-col xl:flex-row gap-5">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Book Management
                  </div>
                  <p className="mt-2 text-gray-500">
                    A backend application to manage book data and employees, built using Golang and MongoDB. It includes CRUD operations for book data and employees.
                  </p>
                  <p className='mt-4'>Golang, MongoDB, REST API</p>
                  <a
                    href="https://github.com/dnday/golangproject" target='_blank'
                    className="mt-4 inline-block px-6 py-2 border-2 bg-indigo-300 border-indigo-300 text-indigo-900 rounded-full hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out"
                  >Link Here</a>
                </div>
                <div className="md:shrink-0 flex justify-center items-center p-6">
                  <img src={Proj2IMG} alt="Book Management System" className="object-cover rounded-lg w-72 h-72 p-4"/>
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
