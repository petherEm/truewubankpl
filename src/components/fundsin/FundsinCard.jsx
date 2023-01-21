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

import { useRouter } from 'next/router'

const FundsInCard = () => {
  const router = useRouter()

  return (
    <div
      id="fundsIn-Card"
      className="h-[820px] w-full md:w-[400px]"
    >
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div
            onClick={() => router.push('/app/fundsin')}
            className="mt-8 flex cursor-pointer items-center justify-between space-x-6 p-2 font-bold"
          >
            <HiChevronLeft className="text-2xl text-slate-800" />
            <p className="text-blue-800">Cancel</p>
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-xl font-bold text-black">
              Ile chcesz wpłacić na PLNkoncie?
            </h1>

            {/* CARD FUNDING */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div className="">
                <p className="ml-4 text-[10px] text-black">Kwota</p>
                <input
                  type="number"
                  placeholder="100 PLN"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              {/* CARD SELECTION */}

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-md mt-4 mb-4 font-bold text-black">
                    Prześlij przez:
                  </h1>
                  <p className="text-[12px] font-bold text-blue-800">Zmień</p>
                </div>
                <div className="mb-6 flex items-center space-x-4">
                  <FaCcMastercard className="text-4xl" />
                  <div>
                    <p className="text-[12px] font-bold">**** 9999</p>
                    <p className="text-[9px]">Credit | Wazność do 03/RR</p>
                  </div>
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
                    <p className="text-[10px]">4,49 PLN</p>
                  </div>
                  <hr className="" />
                  <div className="flex justify-between">
                    <p className="text-[10px]">Całkowity kosz z opłatami:</p>
                    <p className="text-[12px] font-bold">104,49 PLN</p>
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

export default FundsInCard
