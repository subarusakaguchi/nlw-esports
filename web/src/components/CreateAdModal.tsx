/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/no-misused-promises */
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { GameController } from 'phosphor-react'
import { Input } from './Form/Input'
import { StyledCheckbox } from './Form/StyledCheckbox'
import { StyledSelect } from './Form/StyledSelect'
import { StyledToggleGroup } from './Form/StyledToggleGroup'
import { FormEvent, useState } from 'react'
import axios from 'axios'

export function CreateAdModal () {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)

  async function handleCreateAd (event: FormEvent) {
    event.preventDefault()

    const target = event.target as HTMLFormElement

    const formData = new FormData(target)

    const data = Object.fromEntries(formData)

    console.log(data)

    try {
      console.log({
        discord: data.discord,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        name: data.name,
        weekDays,
        yearsPlaying: Number(data.yearsPlaying),
        useVoiceChannel
      })

      await axios.post(`http://localhost:8888/ads/${data.game}`, {
        discord: data.discord,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        name: data.name,
        weekDays,
        yearsPlaying: Number(data.yearsPlaying),
        useVoiceChannel
      })

      alert('Anúncio criado com sucesso!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
      <Dialog.Content className='bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[488px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
            <Select.Root name='game'>
              <Select.Trigger
                className='flex justify-between bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500'
              >
                <Select.Value placeholder="Selecione o game que deseja jogar"/>
                <Select.Icon>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <StyledSelect />
            </Select.Root>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input name="name" id="name" type="text" placeholder='Como te chamam dentro do game?' />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder='Tudo bem ser ZERO' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="discord">Qual o seu discord?</label>
              <Input name='discord' id="discord" type="text" placeholder='Usuário#0000' />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <StyledToggleGroup weekDays={weekDays} setWeekDays={setWeekDays} />
            </div>

            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart">Qual o horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input name='hourStart' id="hourStart" type="time" placeholder='De' />
                <Input name='hourEnd' id="hourEnd" type="time" placeholder='Até' />
              </div>
            </div>
          </div>

          <StyledCheckbox useVoiceChannel={useVoiceChannel} setUseVoiceChannel={setUseVoiceChannel} />

          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close
              className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
            >
              Cancelar
            </Dialog.Close>
            <button
              type='submit'
              className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>

      </Dialog.Content>
    </Dialog.Portal>
  )
}
