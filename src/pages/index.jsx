import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

import { useSession, signIn, signOut } from 'next-auth/react'

import BenefitSummaryPL from '@/components/BenefitSummaryPL'

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
              Zarejestruj się dzisiaj i otrzymaj{' '}
              <span className="text-white">
                Bezpłatną kartę debetową Visa Platinum i wypróbuj różne
                korzyści.
              </span>
            </h1>
          </div>
          <div>
            <h2 className="mt-10 text-xl font-bold text-yellow-400 md:text-2xl xl:text-2xl">
              Przedstawiamy nową aplikację Western Union Digital Banking
            </h2>
            <h3 className="mt-4 text-xl font-bold md:text-2xl xl:text-2xl">
              Niskie opłaty. Wysokie odsetki.
            </h3>
          </div>
          <div className="mt-8 flex justify-center space-x-8 md:justify-start">
            <button
              onClick={signIn}
              className="rounded-full bg-yellow-400 px-12 py-4 text-xl font-semibold text-black hover:bg-yellow-600"
            >
              Zaloguj się
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
            Otrzymuj pieniądze na swoje konto w{' '}
            <span className="text-yellow-400">
              Bankowości Mobilnej Western Union
            </span>
          </h1>

          <h2 className="text-2xl font-bold">
            Czekasz na przekaz pieniężny? Zarób do (100 PLN) w premiach1
            otrzymując go na swoje konto w Bankowości Mobilnej Western Union!
          </h2>

          <h2 className="text-2xl">
            Wystarczy pobrać aplikację Bankowości Mobilnej Western Union i
            otrzymywać pieniądze bezpośrednio na swoje konto w Bankowości
            Mobilnej Western Union lub przekierować odbiór gotówki na swoje
            konto.
          </h2>

          <h2 className="text-2xl">
            Otrzymasz <span className="font-bold text-yellow-400">50 PLN </span>{' '}
            premii za pierwszy przekaz i{' '}
            <span className="font-bold text-yellow-400">50 PLN </span>
            za drugi. Oferta jest ważna do 31 marca 2023 roku.
          </h2>

          <button className="w-fit rounded-full bg-yellow-400 px-12 py-4 text-xl font-semibold text-black hover:bg-yellow-600">
            Pobierz teraz
          </button>
        </div>

        {/* BENEFIT SUMMARY SECTION */}

        <BenefitSummaryPL />
      </div>
    </div>
  )
}
