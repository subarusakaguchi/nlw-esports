import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.png'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'

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
  const [open, setOpen] = useState<boolean>(false)
  const [games, setGames] = useState<Game[] | []>([])

  useEffect(() => {
    axios('http://localhost:8888/games/all')
      .then(response => {
        setGames(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />

      <h1 className='lg:text-6xl text-4xl text-white font-black lg:mt-20 mt-10'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

      <div className='lg:grid lg:grid-cols-6 flex flex-col lg:gap-6 gap-4 lg:mt-16 mt-10'>
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

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <CreateAdBanner />

        <CreateAdModal setOpen={setOpen} />
      </Dialog.Root>
    </div>
  )
}

export default App
