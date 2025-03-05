import Navbar from '../components/Navbar'
import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom";

const EpisodeDetail = () => {
    const [episode, setEpisode] = useState([]);
    const [characters, setCharacters] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const detailFunction = async () => {
          try {
            const detailResponse = await fetch(
              `https://rickandmortyapi.com/api/episode/${id}`
            );
            const response = await detailResponse.json();
            setEpisode(response);
            if (response.characters.length > 0) {
              const charactersResp = await Promise.all(
                response.characters.map((url) => fetch(url).then((res) => res.json()))
                );
              setCharacters(charactersResp);
            }
          } catch (error) {
            console.error("Erro ao buscar o personagem:", error);
          }
          
        };
        if (id) {
          detailFunction();
        }
      }, [id]);
    return (
    <div>
        <div><Navbar/></div>
        <div className="mb-20 flex flex-col">
            <div className="m-10 mb-20 self-center text-7xl text-lime-400">{episode.episode}</div>
            <div className="mb-20 flex flex-wrap gap-2 self-center">
                <p className="px-3 py-1 text-[12px] bg-teal-950 text-teal-400 max-w-max rounded-3xl font-semibold self-center">
                 Episode Name: {episode.name}   
                </p>
                <p className="px-3 py-1 text-[12px] bg-teal-950 text-teal-400 max-w-max rounded-3xl font-semibold self-center">
                Release Date: {episode.air_date}   
                </p>
                <p className="px-3 py-1 text-[12px] bg-teal-950 text-teal-400 max-w-max rounded-3xl font-semibold self-center">
                Characters Total: {episode.characters?.length}
                </p>
            </div>
            <h1 className="mb-10 self-center text-4xl text-teal-400">characters</h1>
            <Link to={'characters/page/detail/:id'} className="">
            <div className="grid grid-cols-4 gap-4">
                {characters.map((character)=>(
                    <div key={character.id} className="flex-col pt-2 pb-2 shadow-md bg-linear-to-r/srgb from-gray-950 to-teal-950 m-2 relative flex flex-col-2 items-center justify-center gap-2 text-center rounded-2xl hover:scale-110 transition-all duration-500">
                    <img
                      src={character.image}
                      className={`w-20 h-20 mt-0 rounded-full border-4 ${character.status} self-center`}
                    />
                    <div className="w-50">
                      <span className="text-2xl text-white font-semibold">{character.name}</span>
                    </div>
                    
                  </div>
                ))}
            </div>
            </Link>
        </div>
    </div>
  )
}

export default EpisodeDetail