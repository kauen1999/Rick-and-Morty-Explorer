import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Status.css";

const CardCharacters = () => {
  const { page } = useParams(); // Pega o parâmetro da página da URL
  const [characters, setCharacters] = useState([]);

  const currentPage = Number(page) || 1;

  useEffect(() => {
    // Fazer a requisição para a API de personagens usando o número da página
    const getData = async () => {
      const fetchData = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      const response = await fetchData.json();
      setCharacters(response.results);
    };
    getData();
  }, [currentPage]);
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 mb-10 m-5">
      {characters.length > 0 ? (
        characters.map((character) => (
          <Link to={`/characters/page/detail/${character.id}`} key={character.id}>
          <div  className="w-90 pt-2 pb-2 flex-row shadow-md bg-gray-950 hover:bg-gradient-to-r hover:from-teal-950 m-2 relative flex flex-col-2 items-center justify-center gap-2 text-center rounded-2xl hover:scale-110 transition-all duration-500">
            <img
              src={character.image}
              className={`w-20 h-20 mt-0 rounded-full border-4 ${character.status} items-center`}
            />
            <div className="w-50">
              <span className="text-2xl text-white font-semibold">{character.name}</span>
              <p className="flex flex-col-2 items-center justify-center gap-2 text-center text-white">
                <p
                  className={`w-2 h-2 mt-8  ${character.status} rounded-full`}
                ></p>
                {character.status}
              </p>
            </div>
          </div>
          </Link>
        ))
      ) : (
        <p>Carregando personagens...</p>
      )}
    </div>
  );
};

export default CardCharacters;
