import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CardLocations = () => {
  const { page } = useParams(); // Pega o parâmetro da página da URL
  const [locations, setLocations] = useState([]);

  // Converte a página para número, caso não seja válido, usa o valor 1
  const currentPage = Number(page) || 1;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/location?page=${currentPage}`
        );
        const data = await response.json();
        setLocations(data.results);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    getData();
  }, [currentPage]);
  return (
    <div>
      <div className="mt-10 mb-10 m-5 grid grid-cols-4 gap-4">
        {locations.length > 0 ? (
          locations.map((location) => (
            <div key={location.id} className="w-76 h-32 bg-gray-950 hover:bg-linear-to-l hover:from-gray-950 hover:to-teal-950 rounded-xl overflow-hidden isolate font-sans text-[16px] group" >
              <Link to={`/locations/page/detail/${location.id}`}>
                {/* Title */}
                <div className=" text-lime-400 pl-5 pr-5 pt-3 text-lg font-medium transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  {location.type === location.name ? '' : location.type } {location.name}
                </div>
                {/* Body */}
                <div className=" text-gray-400 pl-5 pr-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  {location.dimension}
                </div>
                <div className=" text-gray-400 pl-5 pr-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  Residents: {location.residents.length}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Carregando personagens...</p>
        )}
      </div>
    </div>
  );
};

export default CardLocations;
