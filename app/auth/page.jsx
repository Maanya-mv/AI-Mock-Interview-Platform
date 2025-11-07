"use client"
import React from 'react'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'  
import { Button } from "@/components/ui/button";


console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

function Login() {
  const signInWithGoogle = async () => {
    const {error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) {
      console.error('Error:', error.message)
    } else {
      console.log('Redirect URL:', data?.url)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex flex-col items-center border rounded-2xl p-8 '>
        <Image src="/Logo.png" alt="logo" width={400} height={100} className='w-[180px] rounded-2xl priority' />
        <div className='flex items-center flex-col'>
          <Image src={'/Login.jpg'} alt='login' width={600} height={400} className='w-[400px] h-[250px] priority' />
          <h2 className='text-1.8xl font-bold text-center'>Welcome to AiRecruiter</h2>
          <p className='text-gray-500 text-center'>Sign In With Google Authentication</p>
          <Button className='mt-7 w-full' onClick={signInWithGoogle}>
            Login With Google
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
