import React from 'react'
import Image from 'next/image'
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
} from 'react-icons/hi'
import { FaUserPlus, FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { AiFillWallet, AiFillStar, AiOutlineQrcode } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'
import { MdQrCodeScanner } from 'react-icons/md'

const SendIntro = () => {
  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Money Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-4 text-white">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="mt-4 mb-4 text-xl font-bold">
              Prześlij <br />
              pieniądze
            </h1>
            <MdQrCodeScanner className="text-2xl text-yellow-400" />
          </div>

          {/* FREQUENT RECEIVERS */}

          <div className="mb-12">
            <div className="flex justify-between">
              <h1 className="text-sm font-bold">Kontakty</h1>
              <p className="cursor-pointer text-[12px] text-yellow-500">
                Pokaż wszystko
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
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

          {/* CTA button */}
          <button className="w-[80%] mx-auto -my-4 z-40 rounded-full bg-yellow-400 py-2 text-[12px] font-bold text-black">
            Wyślij pieniądze teraz
          </button>

          {/* SENDING ACTIVITY */}

          <div className="h-80 bg-slate-100 p-6 text-black">
            <h1 className="mt-4 text-[12px] font-bold">aktywność</h1>
            <div>
              {/* ACTIVITY */}
              <div className="mt-4 mb-4 flex justify-between">
                <div className="flex space-x-4">
                  <div className="relative h-6 w-6 rounded-full border-2 border-black">
                    <p className="absolute top-0.5 left-0.5 text-[10px] font-bold">
                      DK
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold">Darek Korczyc</p>
                    <p className="text-[8px]">19 grudzień o 10:59</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px]">-30,00 PLN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-slate-600">
        <hr className="h-2" />
        <div className="flex items-center justify-between px-5 py-2">
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <HiTemplate className="text-2xl" />
            <p className="text-[8px]">Pulpitu</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <AiFillWallet className="text-2xl" />
            <p className="text-[8px]">Pieniądze</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center text-yellow-400">
            <TbArrowsLeftRight className="text-2xl" />
            <p className="text-[8px]">Wyślij</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <AiFillStar className="text-2xl" />
            <p className="text-[8px]">Premi</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
            <HiUserCircle className="text-2xl" />
            <p className="text-[8px]">Profil</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SendIntro
