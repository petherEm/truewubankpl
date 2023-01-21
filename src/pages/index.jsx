import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="mx-auto max-w-6xl">
      <Head>
        <title>Western Union Digital Bank App</title>
        <meta name="description" content="" />
      </Head>


      <Header />
      <div className="p-2 mt-[50px] md:mt-[100px] min-h-[300px] h-auto flex flex-col xl:flex-row justify-between items-center text-white">
        <div className="flex-1">
          <div>
            <h1 className="text-yellow-400 text-4xl md:text-6xl xl:text-6xl font-extrabold italic">
              Sign up today and get:{' '}
              <span className="text-white">
                Free Visa Platinum debit card + unlock multiple benefits.
              </span>
            </h1>
          </div>
          <div>
            <h2 className="mt-10 font-bold text-xl md:text-2xl xl:text-2xl text-yellow-400">Introducing the new Western Union Digital Banking app.</h2>
            <h3 className="mt-4 font-bold text-xl md:text-2xl xl:text-2xl">Low fees. High interest rates.</h3>
          </div>
          <div className="mt-8 flex justify-center md:justify-start space-x-8">
            <button className="bg-yellow-400 text-black px-6 py-4 rounded-full text-xl font-semibold">Download now</button>
            <button onClick={() => router.push('/app/main')} className="bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-semibold">Login</button>
          </div>
        </div>
        <div className="">
          <Image src="/jupiter-hero-img-PL.svg" width="700" height="800" />
        </div>
      </div>
    </div>
  )
}
