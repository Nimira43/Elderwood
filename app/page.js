'use client'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function HomePage() {

  const handleClick = (mode) => {
    mode ? toast.success('Test Success') : toast.error('Test Error')
  }

  return (
    <>
      <div className='p-4 bg-dark'>
        <h1 className='text-3xl text-main logo'>Elderwood</h1>    
      </div>
      <Button
        onClick={() => handleClick(true)}
        className='mt-10 p-4'
      >
        Login
      </Button>
    </>
  )
}