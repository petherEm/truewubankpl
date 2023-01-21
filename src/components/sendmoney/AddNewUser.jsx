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

import Switch from 'react-switch';

const AddNewUser = () => {
  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center justify-between space-x-6 p-2 font-bold">
            <HiChevronLeft className="text-2xl text-slate-800" />
            <p className="text-blue-800">Importowa</p>
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-3xl font-bold text-black">
              Nowe osoba <br />
              prywatna <br />
              kontakt
            </h1>

            {/* SEND DETAILS */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div className="flex justify-between space-x-2">
                <div classsName="">
                  <p className="ml-4 w-fit text-[10px] text-black placeholder:text-[12px] placeholder:text-slate-700">
                    Kraj
                  </p>
                  <input
                    type="text"
                    placeholder="Kod"
                    className="z-8 h-10 w-[80px] rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                  />
                </div>
                <div className="">
                  <p className="ml-4 text-[10px] text-black">Kraj</p>
                  <input
                    type="number"
                    placeholder="Numer telefonu"
                    className="z-8 h-10 w-[180px] rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                  />
                </div>
              </div>
              <p className="text-[12px] mt-6 mb-6">
                Dodaj numer telefonu, aby sprawdzić, czy odbiorca ma konto WU+.
                Jeśli tak, możesz wysłać pieniądze bezpłatnie i natychmiast.
              </p>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Metoda doręczenia</p> */}
                <input
                  type="text"
                  placeholder="Nick"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Kwota przekazu</p> */}
                <input
                  type="text"
                  placeholder="Imię zgodne z dokumentem tożsamości"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Kwota przekazu</p> */}
                <input
                  type="text"
                  placeholder="Drugie imię zgodne z dokumentem tożsamości"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Kwota przekazu</p> */}
                <input
                  type="text"
                  placeholder="Nazwisko zgodne z dokumentem tożsamości"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <h1 className="font-bold">Metoda wypłaty</h1>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Kraj</p>
                <input
                  type="text"
                  placeholder="Albania"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Waluta</p>
                <input
                  type="text"
                  placeholder="Albanian Lek"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Metoda</p>
                <input
                  type="text"
                  placeholder="-Select-"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-[12px]">Zapisz jako ulubiony</h2>
                <Switch onChange={() => null} checked height={24} width={50} />
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Zapisz i kontynuuj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewUser
