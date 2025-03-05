import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CardEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const { page } = useParams();
  const currentPage = Number(page) || 1;

  useEffect(() => {
    const episodesFunction = async () => {
      const fetchData = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
      );
      const data = await fetchData.json();
      setEpisodes(data.results);
    };
    episodesFunction();
  }, [currentPage]);
  return (
    <div>
      <div className="mt-10 mb-10 m-5 grid grid-cols-4 gap-4">
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <Link key={episode.id} to={`/episodes/page/detail/${episode.id}`}>
              <div className="w-76 h-32 bg-gray-950 hover:bg-linear-to-l hover:from-gray-950 hover:to-teal-950 rounded-xl overflow-hidden isolate font-sans text-[16px] group">
                {/* Title */}
                <div className=" text-lime-400 pl-5 pr-5 pt-3 text-lg font-medium transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  {episode.episode} - {episode.name}
                </div>
                {/* Body */}
                <div className=" text-gray-400 pl-5 pr-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  {episode.air_date}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Carregando personagens...</p>
        )}
      </div>
    </div>
  );
};

export default CardEpisodes;
