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

const AltFundsin1 = () => {
  const router = useRouter()

  return (
    <div className="h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div onClick={() => router.push('/app/main')} className="mt-8 flex items-center space-x-6 p-2">
            <HiChevronLeft className="text-2xl text-slate-800" />
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-xl font-bold text-black">
              Wybierz sposób dodawania pieniędzy
            </h1>

            {/* FUNDS IN SELECTION - P24 ALTERNATIVE */}

            <div className="mt-8 flex flex-col gap-4 text-black">
              <div
                onClick={() => router.push('#fundsIn-Card')}
                className="cursor-pointer rounded-md border-2 border-blue-200 p-4 hover:border-blue-700"
              >
                <div className="flex items-start space-x-2">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">Dodaj z</p>
                      <div>
                        <Image src="/p24_logo.svg" width="70" height="50" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Image src="/bank_blik.svg" width="40" height="40" />
                      <Image src="/bank_ipko.svg" width="40" height="40" />
                      <Image src="/bank_pekao.svg" width="40" height="40" />
                      <Image src="/bank_ing.svg" width="40" height="40" />
                      <Image src="/bank_spol.svg" width="40" height="40" />
                    </div>

                    <p className="text-[10px]">
                      Czas realizacji: w ciągu kilku minut
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold">2,99 PLN</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => router.push('/app/fundsin/card')}
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
                onClick={() => router.push('/app/fundsin/bank')}
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
                onClick={() => router.push('/app/fundsin/mtcn')}
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

export default AltFundsin1
