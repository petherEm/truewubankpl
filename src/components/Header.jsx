import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
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
          <Link
            href="/bugs"
            className="cursor-pointer hover:border-b-2 hover:border-yellow-400"
          >
            Main
          </Link>
        </div>
      </header>
    </>
  )
}
