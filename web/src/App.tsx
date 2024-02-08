import { MagnifyingGlassPlus } from 'phosphor-react'

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
        <a href='' className='box2 relative rounded-lg overflow-hidden'>
          <img src="/game2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <h2 className='text-white font-bold block'>Apex Legends</h2>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>
        </a>
        <a href='' className='box3 relative rounded-lg overflow-hidden'>
          <img src="/game3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <h2 className='text-white font-bold block'>Counter-Strike</h2>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>
        </a>
        <a href='' className='box4 relative rounded-lg overflow-hidden'>
          <img src="/game4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <h2 className='text-white font-bold block'>World of Warcraft</h2>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>
        </a>
        <a href='' className='box5 relative rounded-lg overflow-hidden'>
          <img src="/game5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <h2 className='text-white font-bold block'>Dota 2</h2>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>
        </a>
        <a href='' className='box6 relative rounded-lg overflow-hidden'>
          <img src="/game6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <h2 className='text-white font-bold block'>Fortnite</h2>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc block'>Publique um anúncio para encontra novos players!</span>
          </div>
          <button className='px-4 py-3 bg-violet-500 text-white hover:bg-violet-600 rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
