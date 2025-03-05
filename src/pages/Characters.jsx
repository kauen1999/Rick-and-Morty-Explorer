import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CardCharacters from "../components/CardCharacters";

const Characters = () => {
  const { page } = useParams(); // Pega o parâmetro da página da URL
  const [totalPages, setTotalPages] = useState(1);

  // Converte a página para número, caso não seja válido, usa o valor 1
  const currentPage = Number(page) || 1;

  useEffect(() => {
    // Fazer a requisição para a API de personagens usando o número da página
    const getData = async () => {
      const fetchData = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      const response = await fetchData.json();
      setTotalPages(response.info.pages);
    };
    getData();
  }, [currentPage]);
  return (
    <div className="bg-[#121212]">
      <div>
        <Navbar />
      </div>
      <div>
        <CardCharacters />
      </div>
      <div  className="mt-4 flex ">
        {/* Navegação entre as páginas */}
        {currentPage > 1 && (
          <Link to={`/characters/page/${currentPage - 1}`} className="m-1 rounded-2xl font-medium text-white  hover:bg-gradient-to-r hover:from-lime-400 hover:via-lime-300 hover:to-lime-400  hover:text-white size-14 grow content-center">
            <button className="p-2 flex flex-col-2 justify-self-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
              <p className="pl-5">Previous Page</p>
            </button>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link to={`/characters/page/${currentPage + 1}`} className="m-1 rounded-2xl font-medium text-white  hover:bg-gradient-to-r hover:from-lime-400 hover:via-lime-300 hover:to-lime-400  hover:text-white pr-5 size-14 grow content-center">
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
  );
};

export default Characters;
