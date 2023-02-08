import React from 'react'
import Image from 'next/image'
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
  HiIdentification,
} from 'react-icons/hi'
import { FaUserPlus, FaPassport, FaCcMastercard } from 'react-icons/fa'
import { AiFillWallet, AiFillStar } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'

const AltFundsInCard = () => {
  return (
    <div
      id="fundsIn-Card"
      className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600"
    >
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center justify-between space-x-6 p-2 font-bold">
            <HiChevronLeft className="text-2xl text-slate-800" />
            <p className="text-blue-800">Anuluj</p>
          </div>

          <div>
            <h1 className="mt-4 mb-2 text-xl font-bold text-black">
              Wprowadź kwotę zasilenia konta
            </h1>

            {/* CARD FUNDING */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div className="flex flex-col gap-2">
                <p className="ml-4 text-[10px] text-black">Kwota</p>
                <input
                  type="number"
                  placeholder="1000 PLN"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
                <h1 className="mt-4 mb-2 text-xl font-bold text-black">
                  Płacisz BLIK? Wprowadź kod
                </h1>
                <div className="flex">
                  <Image src="/bank_blik.svg" width={200} height={50} />

                  <input
                    type="number"
                    placeholder="Kod Blik"
                    className="z-8 h-16 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                  />
                </div>
              </div>

              {/* BANK SELECTION */}
              <h1 className="mt-4 mb-2 text-xl font-bold text-black">
                Albo wybierz swój bank a przekierujemy Cię do płatności
              </h1>
              {/* P24 KICKS-IN */}
              <div className="flex space-x-2">
                <Image
                  src="/bank_ipko.svg"
                  width="70"
                  height="50"
                  className="cursor-pointer"
                />
                <Image
                  src="/bank_mbank.svg"
                  width="70"
                  height="50"
                  className="cursor-pointer"
                />
                <Image
                  src="/bank_pekao.svg"
                  width="70"
                  height="50"
                  className="cursor-pointer"
                />
                <Image
                  src="/bank_spol.svg"
                  width="70"
                  height="50"
                  className="cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-md mt-4 mb-4 font-bold text-black">
                    Wybrałeś płatność z:
                  </h1>
                  <p className="text-[12px] font-bold text-blue-800">Zmień</p>
                </div>
                <div className="mb-6 flex items-center space-x-4">
                  <Image src="/bank_mbank.svg" width={100} height={50} />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="text-[10px]">Czas realizacji:</p>
                    <p className="text-[10px]">W ciągu kilku minut</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[10px]">Kwota depozytu:</p>
                    <p className="text-[10px]">100 PLN</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[10px]">Opłata:</p>
                    <p className="text-[10px]">2,99 PLN</p>
                  </div>
                  <hr className="" />
                  <div className="flex justify-between">
                    <p className="text-[10px]">Całkowity kosz z opłatami:</p>
                    <p className="text-[12px] font-bold">102,99 PLN</p>
                  </div>
                </div>
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Potwierdź
              </button>
              <button className="mt-2 rounded-full px-4 py-3 text-[14px] font-semibold text-blue-700 ">
                Wyłącznie odpowiedzialność
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AltFundsInCard
