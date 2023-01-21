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

const Intro2 = () => {
  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col bg-slate-100 pb-10 rounded-2xl">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center space-x-6 p-2">
            <HiChevronLeft className="text-2xl text-slate-800" />
            <div className="h-1 w-[30%] rounded-lg bg-yellow-400" />
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-xl font-bold text-black">
              Twój dokument tożsamości
            </h1>
            <p className="p-2 text-[14px] text-black">
              W ramach procesu rejestracji porównujemy cyfrowo Twój dokument
              tożsamości i zdjęcie typy selfie, aby potwierdzić Twoją tożsamość
              w celu utworzenia konta. Jest to szybki i prosty proces, który
              można wykonać wygodnie z domu lub biura. Można też przeprowadzić
              proces weryfikacji z pomocą agenta, korzystając z połączenia wideo
              na żywo. Wybierz kraj, w którym został wydany Twój dowód osobisty
            </p>

            <div className="mt-4 h-12 cursor-pointer  rounded-md bg-slate-200 p-2">
              <div className="relative mt-10 mb-6 flex items-center">
                <p className="absolute -top-14  px-2 text-[10px] text-black">
                  Kraj wydania dokumentu
                </p>
                {/* <Image src="/PL_flag2.png" width={50} height={10} />
                <p className="-ml-2 text-[12px] text-black">Polska</p> */}
              </div>
            </div>

            {/* ID Selection */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div className="cursor-pointer rounded-md border-2 border-blue-700 p-4">
                <div className="flex items-center space-x-2">
                  <FaPassport className="text-3xl text-blue-600" />

                  <div>
                    <p className="font-semibold">Paszport</p>
                    <p className="text-[10px]">
                      Dokument uprawniający do podrózy zagranicznych
                    </p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-md border-2 border-slate-300 p-4 hover:border-blue-700">
                <div className="flex items-center space-x-2">
                  <HiIdentification className="text-3xl text-blue-600" />

                  <div>
                    <p className="font-semibold">Dowód osobisty</p>
                    <p className="text-[10px]">
                      Uznawany przez państwo (z wyłączeniem prawa jazdy)
                    </p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-md border-2 border-slate-300 p-4">
                <div className="flex items-center space-x-2">
                  <HiIdentification className="text-3xl text-slate-400" />

                  <div className="text-slate-400">
                    <p className="font-semibold">Karta pobytu</p>
                    <p className="text-[10px]">
                      Tymczasowy dokument tozsamości lub <br />
                      dokument tozsamości dla obywateli zagranicznych
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Kontynuuj połączenie wideo na żywo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro2
