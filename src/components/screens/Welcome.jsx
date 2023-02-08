import React, { useState } from 'react'
import Image from 'next/image'
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
  HiOutlineFingerPrint,
} from 'react-icons/hi'
import { FaUserPlus } from 'react-icons/fa'
import { AiFillWallet, AiFillStar } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'

import { FiLogOut } from 'react-icons/fi'

import { useSession, signIn, signOut } from 'next-auth/react'

import MobFooter from '../MobFooter'
import LoginTrigger from '../LoginTrigger'

import { useRouter } from 'next/router'

const Welcome = () => {
  const { data: session } = useSession()

  const [hiddenBalance, setHiddenBalance] = useState(false)
  const [showBlik, setShowBlik] = useState(false)
  const [countdown, setCountdown] = useState(60)

  const router = useRouter()

  const handleHiddenBalance = () => {
    setHiddenBalance(!hiddenBalance)
  }

  const handleCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 'BLIK wygasł'
      )
    }, 1000)
    return () => clearInterval(timer)
  }

  const handleShowBlik = () => {
    const generateBlikCode = () => {
      const blikCode = Math.floor(100000 + Math.random() * 900000)
      return blikCode
    }
    handleCountdown()
    setShowBlik(generateBlikCode)
  }

  return (
    <div className="h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      {session ? (
        <div className="flex flex-col">
          <div className="flex flex-col px-4 text-white">
            <header className="mt-2 flex items-center justify-between">
              
              <Image src="/logo.svg" width="220" height="100" />
              <FiLogOut
                className="cursor-pointer text-2xl text-yellow-400"
                onClick={signOut}
              />
            </header>
            <div className="flex items-center justify-between">
              <h1 className="mt-8 mb-4 text-2xl font-bold">
                Witaj {session.user.name.split(' ')[0]} !
              </h1>
              <img
                src={session.user.image}
                width="40"
                height="50"
                className="rounded-full"
              />
            </div>

            {/* Account section */}
            <div className="mt-4 mb-4 flex justify-between">
              <div>
                <div>
                  <p className="text-[12px] font-light">Saldo całkowite</p>
                  <h1 className="text-3xl font-extrabold">
                    {hiddenBalance ? '••••••' : '171,74 zł'}
                  </h1>
                  <div className="flex">
                    <Image src="/PL_flag.webp" width="50" height="50" />
                    <Image src="/EU_flag.png" width="30" height="50" />
                  </div>
                </div>
              </div>
              <div className="flex cursor-pointer flex-col items-end gap-2">
                <p
                  className="text-[12px] text-yellow-500"
                  onClick={handleHiddenBalance}
                >
                  {hiddenBalance ? 'Pokaż' : 'Ukryj'}
                </p>
                <HiChevronRight className="text-yellow-500" />
              </div>
            </div>
            {/* Main Account Summary */}
            <div className="flex justify-between">
              <div>
                <p className="text-[12px]">Konto główne</p>
                <h1 className="text-2xl font-extrabold">
                  {hiddenBalance ? '••••••' : '154,50 zł'}
                </h1>
              </div>
              <HiChevronRight className="cursor-pointer text-yellow-500" />
            </div>

            {/* CTA buttons */}

            <div className="mt-4 mb-4 flex items-center justify-between">
              <button
                onClick={() => router.push('/app/fundsin')}
                className="rounded-full bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-600"
              >
                Wpłać pieniądze
              </button>
              <button 
                onClick={() => router.push('/app/sendmoney')}
                className="rounded-full bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-600">
                Wyślij
              </button>
            </div>

            {/* BLIK Payment */}

            <div className="mt-4 mb-4 flex flex-col items-start justify-between">
              <p className="text-[12px]">Zapłać z BLIK</p>
              <div className="flex items-center space-x-10">
                <div
                  onClick={handleShowBlik}
                  className="cursor-pointer  rounded-full px-4 py-2 text-black hover:bg-yellow-600"
                >
                  <Image src="/blik_short.jpeg" width="50" height="50" />
                </div>
                <div className="flex w-[160px] flex-col rounded-md border-2 border-yellow-400 px-6 py-1 text-center text-[22px] font-bold text-white hover:bg-yellow-600">
                  <p>{showBlik ? showBlik : '123456'}</p>
                  <span className="animate-pulse text-[10px] text-yellow-400 ">
                    wygasa za {countdown} sek
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-[12px]">Karta debetowa</p>
              <p className="cursor-pointer text-[12px] text-yellow-500">
                Wyświetl <br />
                szczegóły
              </p>
            </div>
            {/* Card picture */}
            <div className="mt-4 mb-4 flex items-center justify-center">
              <Image src="/cardpm.jpeg" width="250" height="100" />
            </div>

            {/* Favourite receivers */}
            <div className="mt-4 mb-4 flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-bold">Ulubieni odbiorcy</p>
                <p className="cursor-pointer text-[12px] text-yellow-500">
                  Zobacz wszystkich <br />
                  odbiorców
                </p>
              </div>
              <div className="mt-4 flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                    <FaUserPlus className="absolute top-3 left-4 text-2xl text-yellow-400" />
                  </div>
                  <p className="text-[12px] font-bold">Dodaj</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                    <p className="absolute top-3 left-3 text-[18px] font-bold">
                      DK
                    </p>
                  </div>
                  <p className="text-[12px] font-bold">Darek</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                    <p className="absolute top-3 left-3 text-[18px] font-bold">
                      KD
                    </p>
                  </div>
                  <p className="text-[12px] font-bold">Klaudia</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-4 mb-4 flex justify-between">
              <p className="text-[12px]">Szybkie działania</p>
              <p className="cursor-pointer text-[12px] text-yellow-500">
                Dostosuj
              </p>
            </div>

            {/* Saving targets */}
            <div>
              <div className="mt-4 mb-4 flex justify-between">
                <p className="text-[12px]">Cele</p>
                <p className="cursor-pointer text-[12px] text-yellow-500">
                  Pokaż wszystko
                </p>
              </div>
              <button className="w-full rounded-full border-[1.5px] border-white px-4 py-2 text-[12px] font-semibold hover:border-slate-200 hover:text-slate-200">
                Dodaj nowy cel
              </button>
            </div>

            {/* T & C */}
            <div className="mt-4 mb-4 flex justify-center">
              <button className="text-[12px] font-bold text-yellow-400">
                Wyłącznie odpowiedzialności
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginTrigger />
      )}

      {/* MOB FOOTER */}

      <MobFooter />
    </div>
  )
}

export default Welcome
