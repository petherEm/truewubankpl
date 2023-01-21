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

const Intro5 = () => {
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
              Jeszcze kilka szczegółów
            </h1>
            <h1 className="text-md mt-4 mb-4 text-black">
              Przed złożeniem wniosku musimy zebrać jeszcze jeden zestaw danych
            </h1>

            {/* PERSONAL DATA */}
            <div>
              <h1 className="mt-4 mb-4 font-bold text-black">
                Szczegóły zawodowe
              </h1>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Status zatrudnienia
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Employed"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Branża zatrudnienia
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Skilled Trade/Specialist"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Źródło środków
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Wynagrodzenie"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>
            </div>

            {/* TAX DETAILS */}
            <div>
              <h1 className="mt-4 mb-4 font-bold text-black">
                Wprowadź numer identyfikacji podatkowej
              </h1>
              <h1 className="text-md mt-4 mb-4 text-black">
                Po co musisz podawać numer identyfikacji podatkowej? Poland?{' '}
                <br />
                Użyj numeru PESEL jako polskiego numeru identyfikacji
                podatkowej.
              </h1>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Numer identyfikacji podatkowej
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="8888888888"
                  className="z-8 h-10 w-full rounded-lg bg-red-200 border-b-2 border-red-500 px-3 text-black outline-none"
                />
                <p className="text-[10px] text-red-600 ">
                  Upewnij się ze numer identyfikacji podatkowej ma prawidłowy
                  format.
                </p>
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 w-full rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Potwierdź
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro5
