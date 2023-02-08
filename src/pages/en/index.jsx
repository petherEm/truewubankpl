import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

import { useSession, signIn, signOut } from 'next-auth/react'

import BenefitSummary from '@/components/BenefitSummary'

export default function Home() {
  const { data: session } = useSession()

  const router = useRouter()

  console.log(session)

  return (
    <div className="mx-auto max-w-6xl">
      <Head>
        <title>Western Union Digital Bank App</title>
        <meta name="description" content="" />
      </Head>

      <Header />
      <p className="animate-pulse p-2 text-red-400">
        Not real product | training enhancements purpose only
      </p>

      {/* HERO SECTION */}

      <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[100px] xl:flex-row">
        <div className="flex-1">
          <div>
            <h1 className="text-4xl font-extrabold italic text-yellow-400 md:text-6xl xl:text-6xl">
              Sign up today and get:{' '}
              <span className="text-white">
                Free Visa Platinum debit card + unlock multiple benefits.
              </span>
            </h1>
          </div>
          <div>
            <h2 className="mt-10 text-xl font-bold text-yellow-400 md:text-2xl xl:text-2xl">
              Introducing the new Western Union Digital Banking app.
            </h2>
            <h3 className="mt-4 text-xl font-bold md:text-2xl xl:text-2xl">
              Low fees. High interest rates.
            </h3>
          </div>
          <div className="mt-8 flex justify-center space-x-8 md:justify-start">
            <button
              onClick={signIn}
              className="rounded-full bg-yellow-400 px-12 py-4 text-xl font-semibold text-black hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
        </div>
        <div className="">
          <Image src="/jupiter-hero-img-PL.svg" width="700" height="800" />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-center p-2 text-white md:mt-[100px]">
        <div className="flex w-[80%] flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-5xl font-bold">
            Receive money to a{' '}
            <span className="text-yellow-400">
              Western Union Digital Banking account
            </span>
          </h1>

          <h2 className="text-2xl font-bold">
            Expecting a money transfer? Earn up to 100 PLN in bonuses when you
            receive it in your Western Union Digital Banking account!
          </h2>

          <h2 className="text-2xl">
            Just download the Western Union Digital Banking app and receive
            money straight to a Western Union Digital Banking account or
            redirect cash pickup to your account.
          </h2>

          <h2 className="text-2xl">
            You’ll get a{' '}
            <span className="font-bold text-yellow-400">50 PLN </span> bonus for
            the first money transfer and{' '}
            <span className="font-bold text-yellow-400">50 PLN </span>
            for the second. The offer is valid until March 31, 2023.
          </h2>

          <button className="w-fit rounded-full bg-yellow-400 px-12 py-4 text-xl font-semibold text-black hover:bg-yellow-600">
            Download now
          </button>
        </div>

        {/* BENEFIT SUMMARY SECTION */}

        <BenefitSummary />
      </div>
    </div>
  )
}
