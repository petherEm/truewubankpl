import React, { useState } from 'react'
import Image from 'next/image'
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
} from 'react-icons/hi'
import { FaUserPlus } from 'react-icons/fa'
import { AiFillWallet, AiFillStar } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'

const AltWelcomeBLIKENG = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false)
  const [showBlik, setShowBlik] = useState(false)
  const [countdown, setCountdown] = useState(60)

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
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-4 text-white">
          <header className="mt-4 flex justify-center">
            <Image src="/logo.svg" width="220" height="100" />
          </header>
          <h1 className="mt-4 mb-4 text-2xl font-bold">Hi Piotr</h1>

          {/* Account section */}
          <div className="mt-4 mb-4 flex justify-between">
            <div>
              <div>
                <p className="text-[12px] font-light">Total Balance</p>
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
                {hiddenBalance ? 'Show' : 'Hide'}
              </p>
              <HiChevronRight className="text-yellow-500" />
            </div>
          </div>
          {/* Main Account Summary */}
          <div className="flex justify-between">
            <div>
              <p className="text-[12px]">Primary Account</p>
              <h1 className="text-2xl font-extrabold">
                {hiddenBalance ? '••••••' : '154,50 zł'}
              </h1>
            </div>
            <HiChevronRight className="cursor-pointer text-yellow-500" />
          </div>

          {/* CTA buttons */}

          <div className="mt-4 mb-4 flex items-center justify-between">
            <button className="rounded-full bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-600">
              Add money
            </button>
            <button className="rounded-full bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-600">
              Send
            </button>
          </div>

          {/* BLIK Payment */}

          <div className="mt-4 mb-4 flex flex-col items-start justify-between">
            <p className="text-[12px]">Pay with BLIK</p>
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
                  Expires in {countdown} sec
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[12px]">Debit card</p>
            <p className="cursor-pointer text-[12px] text-yellow-500">
              View <br />
              details
            </p>
          </div>
          {/* Card picture */}
          <div className="mt-4 mb-4 flex items-center justify-center">
            <Image src="/cardpm.jpeg" width="250" height="100" />
          </div>

          {/* Favourite receivers */}
          <div className="mt-4 mb-4 flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-bold">Favorite receivers</p>
              <p className="cursor-pointer text-[12px] text-yellow-500">
                See all <br />
                receivers
              </p>
            </div>
            <div className="mt-4 flex items-center justify-around">
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  <FaUserPlus className="absolute top-3 left-4 text-2xl text-yellow-400" />
                </div>
                <p className="text-[12px] font-bold">Add new</p>
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
            <p className="text-[12px]">Quick actions</p>
            <p className="cursor-pointer text-[12px] text-yellow-500">
              Customize
            </p>
          </div>

          {/* Saving targets */}
          <div>
            <div className="mt-4 mb-4 flex justify-between">
              <p className="text-[12px]">Goals</p>
              <p className="cursor-pointer text-[12px] text-yellow-500">
                View all
              </p>
            </div>
            <button className="w-full rounded-full border-[1.5px] border-white px-4 py-2 text-[12px] font-semibold hover:border-slate-200 hover:text-slate-200">
              Add new goal
            </button>
          </div>

          {/* T & C */}
          <div className="mt-4 mb-4 flex justify-center">
            <button className="text-[12px] font-bold text-yellow-400">
              Legal disclaimers
            </button>
          </div>
        </div>
      </div>
      <footer className="text-slate-600">
        <hr className="h-2" />
        <div className="flex items-center justify-between px-5 py-2">
          <div className="flex cursor-pointer flex-col items-center text-yellow-400">
            <HiTemplate className="text-2xl" />
            <p className="text-[8px]">Dashboard</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <AiFillWallet className="text-2xl" />
            <p className="text-[8px]">Money</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <TbArrowsLeftRight className="text-2xl" />
            <p className="text-[8px]">Send</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <AiFillStar className="text-2xl" />
            <p className="text-[8px]">Rewards</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <HiUserCircle className="text-2xl" />
            <p className="text-[8px]">Profile</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AltWelcomeBLIKENG
