import React from 'react'
import Image from 'next/image'
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
  HiIdentification,
} from 'react-icons/hi'
import { FaUserPlus, FaPassport } from 'react-icons/fa'
import { AiFillWallet, AiFillStar } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'

const Intro3 = () => {
  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col bg-slate-100 pb-10 rounded-2xl">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center space-x-6 p-2">
            <HiChevronLeft className="text-2xl text-slate-800" />
            <div className="h-1 w-[60%] rounded-lg bg-yellow-400" />
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-2xl font-bold text-black">
              Wprowadź dane
            </h1>
            <h1 className="text-md mt-4 mb-4 text-black">
              Wprowadź swoje dane.
            </h1>

            {/* ID DATA */}
            <div>
              <h1 className="mt-4 mb-4 font-bold text-black">
                Szczegóły dokumentu
              </h1>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Wystawca dokumentu tożsamości
                </p>
                <input
                  disabled
                  type="text"
                  placeholder="Polska"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Dokument tożsamości
                </p>
                <input
                  disabled
                  type="text"
                  placeholder="IdCard"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Numer dokumentu tożsamości
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="CEE991223"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Data wygaśnięcia
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="01/01/2027"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-center text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Data wydania
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="01/01/2017"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-center text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Narodowość
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Polska"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 w-full rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Dalej
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro3
