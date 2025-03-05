import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
        // Buscando detalhes dos episódios
        if (data.episode.length > 0) {
          const episodeResponses = await Promise.all(
            data.episode.map((url) => fetch(url).then((res) => res.json()))
          );
          setEpisodes(episodeResponses);
        }
      } catch (error) {
        console.error("Erro ao buscar o personagem:", error);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mb-20 flex flex-col">
        <div className="m-8 justify-items-center">
          <p className="font-bold font-sans italic text-white text-5xl antialiased md:subpixel-antialiased">
            {" "}
            {character.name}{" "}
          </p>
        </div>
        <div className="justify-items-center">
          <img
            src={character.image}
            alt={character.name}
            className="rounded-lg"
          />
        </div>
        <div className="m-8 justify-items-center">
          <div className="flex flex-wrap gap-2 justify-items-center">
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Status: {character.status}
            </p>
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Species: {character.species}
            </p>
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Type: {character.type ? character.type : "Unknown"}
            </p>
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Gender: {character.gender}
            </p>
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Origin: {character.origin?.name}
            </p>
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Location: {character.location?.name}
            </p>
            <p className="px-3 py-1 text-[16px] max-w-max rounded font-semibold text-white">
              Participation: {character.episode.length}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {episodes.map((episode) => (
            <p
              key={episode.id}
              className="px-3 py-1 text-[12px] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 max-w-max rounded font-semibold text-black"
            >
              {episode.episode} - {episode.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
