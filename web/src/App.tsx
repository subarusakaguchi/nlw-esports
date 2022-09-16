import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.png'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'

export interface Game {
  id: string
  name: string
  image_url: string
  created_at: string
  _count: {
    Ads: number
  }
}

function App () {
  const [games, setGames] = useState<Game[] | []>([])

  useEffect(() => {
    fetch('http://localhost:8888/games/all')
      .then(async res => await res.json())
      .then(data => {
        setGames(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              imageUrl={game.image_url}
              title={game.name}
              adsCount={game._count.Ads}
            />
          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
