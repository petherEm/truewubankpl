import React from 'react'
import Image from 'next/image'
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
} from 'react-icons/hi'
import {
  FaUserPlus,
  FaCcVisa,
  FaCcMastercard,
  FaInfoCircle,
} from 'react-icons/fa'
import {
  AiFillWallet,
  AiFillStar,
  AiOutlineQrcode,
  AiFillCopy,
} from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'
import { MdQrCodeScanner } from 'react-icons/md'

const SendDetails = () => {
  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center justify-between space-x-6 p-2 font-bold">
            <HiChevronLeft className="text-2xl text-slate-800" />
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-3xl font-bold text-black">
              Wyślij pieniądze do Darek Korczyc
            </h1>

            {/* SEND DETAILS */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div className="">
                <p className="ml-4 text-[10px] text-black">Wysłane z</p>
                <input
                  type="text"
                  placeholder="PLN Konto"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Metoda doręczenia</p>
                <input
                  type="text"
                  placeholder="Przekaz WU"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Kwota przekazu</p>
                <input
                  type="text"
                  placeholder="PLN Konto"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
                <p className="ml-4 -mt-2 text-[10px] text-black">
                  Maks. 154,50 PLN
                </p>
              </div>

              {/* SUMMARY */}

              <div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="text-[14px]">Czas realizacji:</p>
                    <p className="text-[12px]">W ciągu kilku minut</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[14px]">opłata:</p>
                    <p className="text-[12px]">4,49 PLN</p>
                  </div>
                  <hr className="bg-black" />
                  <div className="flex justify-between">
                    <p className="text-[14px]">Całkowity kosz z opłatą:</p>
                    <p className="text-[12px] font-bold">0,00 PLN</p>
                  </div>
                </div>
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Dalej
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

export default SendDetails
