import React from 'react'
import Image from 'next/image'
import { HiChevronLeft } from 'react-icons/hi'
import { AiFillWallet, AiFillStar, AiFillCopy } from 'react-icons/ai'

import { useRouter } from 'next/router'

const FundsInBank = () => {
  const router = useRouter()
  return (
    <div id="fundsIn-Bank" className="h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div
            onClick={() => router.push('/app/fundsin')}
            className="mt-8 flex items-center justify-between space-x-6 p-2 font-bold cursor-pointer"
          >
            <HiChevronLeft className="text-2xl text-slate-800" />
            <p className="text-blue-800 cursor-pointer">Cancel</p>
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-xl font-bold text-black">
              Dane rachunku
            </h1>

            <p className="text-[14px] text-black">
              Aby zrealizować przelew bankowy, prosimy o uzycie ponizszych
              danych rachunku na koncie innym niz Western Union.
            </p>

            {/* BANK FUNDING */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              {/* BANK DETAILS */}

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-md mt-4 mb-4 font-bold text-black">
                    Szczegóły konta
                  </h1>
                  <p className="cursor-pointer text-[12px] font-bold text-blue-800">
                    Udostępnij
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-[14px]">Odbiorca</p>
                      <p className="text-[12px]">Piotr Kazimierz Maciejewski</p>
                    </div>
                    <AiFillCopy className="cursor-pointer text-blue-800" />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-[14px]">IBAN</p>
                      <p className="text-[12px]">AT411988014699999999</p>
                    </div>
                    <AiFillCopy className="cursor-pointer text-blue-800" />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-[14px]">BIC</p>
                      <p className="text-[12px]">WUIB AT WW XXX</p>
                    </div>
                    <AiFillCopy className="cursor-pointer text-blue-800" />
                  </div>
                </div>
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button
                onClick={() => router.push('/app/main')}
                className="mt-8 rounded-full border-[2px] border-black px-4 py-3 text-[14px] font-semibold text-black "
              >
                Wróć do pulpitu
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

export default FundsInBank
