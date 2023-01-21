import React from 'react'
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

const Intro1 = () => {
  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-4 text-white">
          <header className="mt-4 flex justify-center">
            <Image src="/wupluslogo.jpeg" width="220" height="100" />
          </header>
          <h1 className="mt-4 mb-4 text-2xl font-bold">
            Przedstawiamy <span className="text-yellow-400 font-extrabold">WU+</span>! <br />
            Cyfrowe konto bankowe Western Union
          </h1>


          <div className="border-[1px] h-12 rounded-md p-2 cursor-pointer">
            <div className="relative flex items-center">
              <p className="absolute -top-4 px-2 text-[10px] text-slate-300 bg-black">Kraj / Język</p>
              <Image src="/PL_flag.webp" width={50} height={10} />
              <p className="text-[12px] text-slate-300 -ml-2">Polska / Polski</p>
            </div>
          </div>

          {/* CTA */}



          <div className="mt-4 mb-12 flex flex-col items-center justify-center gap-4">
            <h1 className="self-start font-bold text-yellow-400">Nowy w Western Union</h1>
            <button className="w-[80%] rounded-full bg-yellow-400 px-4 py-2 font-bold uppercase text-black hover:bg-yellow-600">
              Otwórz rachunek!
            </button>
            <p className="mt-2 text-[12px]">
              Chcesz wiedzieć więcej?{' '}
              <span className="font-bold text-yellow-500">
                Tell me more about WU+
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-6 mb-20">
            <h1 className="font-bold">WU.com Customer and WU+ klient:</h1>
            <button className="font-bold border-2 rounded-full py-2 px-2 hover:text-slate-400 hover:border-slate-400">Zaloguj</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro1
