import React from 'react'
import Image from 'next/image'
import { HiOutlineFingerPrint } from 'react-icons/hi'
import { useSession, signIn, signOut } from 'next-auth/react'

const LoginTrigger = () => {
  const { data: session } = useSession()
  
  return (
    <div className="flex h-[540px] flex-col">
      <div className="flex flex-col px-4 text-white">
        <header className="mt-2 flex items-center justify-between">
          <Image src="/logo.svg" width="220" height="100" />
        </header>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-yellow-400">Witaj!</h1>
        <h2>Miło Cię ponownie zobaczyć</h2>

        <div className="mt-8 flex items-center justify-center">
          <HiOutlineFingerPrint className="text-center text-[240px] text-yellow-400" />
        </div>

        {/* CTA buttons */}

        <div className="mt-4 mb-4 flex items-center justify-center">
          <button
            onClick={signIn}
            className="rounded-full bg-yellow-400 px-6 py-3 text-xl font-bold text-black hover:bg-yellow-600"
          >
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginTrigger
