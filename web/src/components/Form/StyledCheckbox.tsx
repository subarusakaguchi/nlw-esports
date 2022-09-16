import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export function StyledCheckbox () {
  return (
    <div className='mt-2 flex items-center gap-2 text-sm'>
      <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
        <Checkbox.Indicator>
          <Check className='w-4 h-4 text-emerald-400' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      Costumo me conectar ao chat de voz
    </div>
  )
}
