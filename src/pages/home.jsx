import Navbar from "../components/Navbar";

const Home = () => {
 
  return (
    <div>
      <div><Navbar/></div>
      <div className="min-h-screen text-white">
      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">Explorando a API de Rick and Morty</h1>
        
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="Rick and Morty"
          className="object-contain w-full mb-6 max-h-60"
        />
        
        <p className="text-lg leading-relaxed">
          Rick and Morty é uma série de animação que acompanha as aventuras caóticas do cientista genial e excêntrico <strong>Rick Sanchez</strong> e seu neto <strong>Morty Smith</strong>. Juntos, eles viajam entre dimensões, encontram seres estranhos e enfrentam desafios intergalácticos repletos de humor e sátira.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          A API de Rick and Morty fornece informações detalhadas sobre os personagens, locais e episódios da série, permitindo que desenvolvedores explorem esses dados de maneira interativa.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Ferramentas Utilizadas</h2>
        <ul className="pl-6 mt-2 space-y-2 list-disc">
          <li><strong>React + Vite</strong> - Estrutura leve e rápida para desenvolvimento.</li>
          <li><strong>React Router</strong> - Gerenciamento de rotas para navegação entre páginas.</li>
          <li><strong>Tailwind CSS</strong> - Biblioteca de estilização flexível e responsiva.</li>
          <li><strong>Visual Studio Code</strong> - Editor de código utilizado no desenvolvimento.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Desafios Encontrados</h2>
        <p className="mt-2 text-lg">
          Um dos maiores desafios durante o desenvolvimento foi lidar com múltiplas requisições à API ao navegar entre páginas. Como alguns endpoints fornecem apenas referências a outros recursos, foi necessário implementar uma estratégia eficiente para obter os dados de forma otimizada.
        </p>
        <p className="mt-2 text-lg">
          Além disso, garantir uma boa experiência de usuário enquanto os dados eram carregados exigiu técnicas como armazenamento em cache e otimização de requisições para reduzir o tempo de espera.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
