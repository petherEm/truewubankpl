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

const Intro4 = () => {
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

            {/* PERSONAL DATA */}
            <div>
              <h1 className="mt-4 mb-4 font-bold text-black">Dane osobowe</h1>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Imię<span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Piotr"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Nazwisko (tak jak widnieje na dokumencie tozsamości)
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Maciejewski"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Data urodzenia (DD-MM-RRRR)
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="01/01/1900"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-center text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Płeć
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Male"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Kraj urodzenia
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Polska"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Miejsce urodzenia
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Warszawa"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>
            </div>

            {/* PERSONAL ADDRESS */}
            <div>
              <h1 className="mt-4 mb-4 font-bold text-black">Obecny adres</h1>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Kraj<span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Polska"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Nazwa ulicy
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Rajska"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="ml-4 text-[10px] text-black">
                    Numer ulicy
                    <span className="text-sm font-bold text-red-600">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="66"
                    className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                  />
                </div>
                <div className="">
                  <p className="ml-4 text-[10px] text-slate-100">
                    Numer ulicy
                    <span className="text-sm font-bold text-slate-100">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Przyrostek nazwy ulicy"
                    className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px]"
                  />
                </div>
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">Numer Mieszkania</p>
                <input
                  type="text"
                  placeholder="100"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Miasto
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Warszawa"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              <div className="">
                <p className="ml-4 text-[10px] text-black">
                  Kod pocztowy
                  <span className="text-sm font-bold text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="00-867"
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

export default Intro4
