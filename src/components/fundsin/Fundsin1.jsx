import React from 'react'
import { useRouter } from 'next/router'
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

const FundsIn1 = () => {
  const router = useRouter()

  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center space-x-6 p-2">
            <HiChevronLeft className="text-2xl text-slate-800" />
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-xl font-bold text-black">
              Wybierz sposób dodawania pieniędzy
            </h1>

            {/* FUNDS IN SELECTION */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div
                onClick={() => router.push('#fundsIn-Card')}
                className="cursor-pointer rounded-md border-2 border-blue-200 p-4 hover:border-blue-700"
              >
                <div className="flex items-start space-x-2">
                  <div>
                    <p className="font-semibold">
                      Z użyciem karty kredytowej lub <br />
                      debetowej
                    </p>
                    <p className="text-[10px]">
                      Czas realizacji: w ciągu kilku minut
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold">4,49 PLN</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => router.push('#fundsIn-Bank')}
                className="cursor-pointer rounded-md border-2 border-blue-200 p-4 hover:border-blue-700"
              >
                <div className="flex items-start space-x-2">
                  <div>
                    <p className="font-semibold">Z innego konta bankowego</p>
                    <p className="text-[10px]">
                      Czas realizacji: 1-2 dni robocze
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold">0,00 - 22,99 PLN</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => router.push('#fundsIn-MTCN')}
                className="cursor-pointer rounded-md border-2 border-blue-200 p-4 hover:border-blue-700"
              >
                <div className="flex items-start space-x-2">
                  <div>
                    <p className="font-semibold">
                      Przekieruj <br />
                      przychodzący przekaz
                    </p>
                    <p className="text-[10px]">W ciągu kilku minut</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold">No fee PLN</p>
                  </div>
                </div>
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Dokonaj zasileniakonta teraz
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

export default FundsIn1
