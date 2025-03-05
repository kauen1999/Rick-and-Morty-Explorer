import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CardLocations from '../components/CardLocations'

const Locations = () => {
  const {page} = useParams();
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = Number(page) || 1;
  
  useEffect(()=> {
    const locationsFunction = async () => {
      const fetchlocation = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
      const response = await fetchlocation.json();
      setTotalPages(response.info.pages)
    };
    locationsFunction();
  },[currentPage]);
  return (
    <div>
        <div><Navbar/></div>
        <div><CardLocations/></div>
        <div className="mt-4 flex ">
        {/* Navegação entre as páginas */}
        {currentPage > 1 && (
          <Link to={`/locations/page/${currentPage - 1}`}className="m-1 rounded-2xl font-medium text-white  hover:bg-gradient-to-r hover:from-lime-400 hover:via-lime-300 hover:to-lime-400  hover:text-white pr-5 size-14 grow content-center">
            <button className="p-2 flex flex-col-2 justify-self-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
              <p className="pl-5">Previous Page</p>
            </button>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link to={`/locations/page/${currentPage + 1}`} className="m-1 rounded-2xl font-medium text-white  hover:bg-gradient-to-r hover:from-lime-400 hover:via-lime-300 hover:to-lime-400  hover:text-white pr-5 size-14 grow content-center">
            <button className="p-2 flex flex-col-2 justify-self-end">
            <p className="pr-5">Next Page</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Locations