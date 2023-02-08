import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSession, signIn, signOut } from 'next-auth/react'

export function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <>
      <header className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div onClick={() => router.push('/')} className="cursor-pointer">
          <Image src="/logo.svg" width="220" height="100" />
        </div>
        <div className="flex items-center justify-between gap-x-6 font-bold text-white">
          {/* <p className="cursor-pointer hover:border-b-2 hover:border-yellow-400">
            Home
          </p> */}
          <button onClick={() => router.push('/en')}>EN</button>
          <button onClick={() => router.push('/')}>PL</button>
          <button
            onClick={signIn}
            className="rounded-lg bg-yellow-400 hover:bg-yellow-600 px-8 py-3 text-xl font-semibold text-black"
          >
            Login
          </button>
        </div>
      </header>
    </>
  )
}
