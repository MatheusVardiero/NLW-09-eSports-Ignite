import './styles/main.css';

import logoImg from './assets/img/Logo.png';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />
      <h1 className='text-6xl text-white font-black my-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='box1 relative rounded-lg overflow-hidden'>
          <img src="/game1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <h2 className='text-white font-bold block'>League of Legends</h2>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>
        </a>
        <a href='' className='box1 relative'>
          <img src="/game2.png" alt="" />
        </a>
        <a href='' className='box1 relative'>
          <img src="/game3.png" alt="" />
        </a>
        <a href='' className='box1 relative'>
          <img src="/game4.png" alt="" />
        </a>
        <a href='' className='box1 relative'>
          <img src="/game5.png" alt="" />
        </a>
        <a href='' className='box1 relative'>
          <img src="/game6.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
