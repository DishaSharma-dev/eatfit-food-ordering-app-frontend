import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export const LoadingButton = () => {
  return (
    <Button disabled>
        <Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2>
        Loading
    </Button>
  )
}
