import React, { useState } from 'react'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'

import MobFooter from '../MobFooter'

import { useSession, signIn, signOut } from 'next-auth/react'
import LoginTrigger from '../LoginTrigger'

const Money = () => {
  const { data: session } = useSession()

  const [cardSummary, setCardSummary] = useState(false)

  const handleSwitch = () => {
    setCardSummary(!cardSummary)
  }

  return (
    <div className="h-[820px] w-full md:w-[400px]">
      {/* Money Screen */}
      {session ? (
        <div className="flex flex-col">
          <div className="flex flex-col px-4 text-white">
            <h1 className="mt-4 mb-4 text-2xl font-bold">Moje pieniądze</h1>

            {/* Account section */}
            <div className="mt-4 mb-4 flex justify-between">
              <div>
                <div>
                  <p className="text-[12px] font-light">
                    Saldo całkowite w <span className="font-bold">PLN</span>
                  </p>
                  <h1 className="text-3xl font-extrabold">171,00</h1>
                  <div className="flex">
                    <Image src="/PL_flag.webp" width="50" height="50" />
                    <Image src="/EU_flag.png" width="30" height="50" />
                  </div>
                </div>
              </div>
              <div className="flex cursor-pointer flex-col items-end gap-2">
                <p className="text-[12px] text-yellow-500">Ukryj</p>
                <HiChevronRight className="text-yellow-500" />
              </div>
            </div>

            {/* CTA buttons */}

            <div className="mt-4 mb-4 flex items-center justify-center">
              <div
                onClick={handleSwitch}
                className={`${
                  cardSummary
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-100 text-black'
                } cursor-pointer  rounded-lg px-4 py-1 text-[10px]`}
              >
                Przegląd konta
              </div>
              <div
                onClick={handleSwitch}
                className={`${
                  cardSummary
                    ? 'bg-slate-100 text-black'
                    : 'bg-slate-700 text-white'
                } cursor-pointer  rounded-lg px-4 py-1 text-[10px]`}
              >
                Karta debetowa
              </div>
            </div>

            {/* BIG ACCOUNT SUMMARY TAB */}
            <div>
              <div className="flex items-center justify-center bg-slate-100 p-4">
                <div className="relative h-[90px] w-[90px] rounded-full border-[42px] border-yellow-300 p-16">
                  <div className="absolute top-4 left-7 flex flex-col items-center text-black">
                    <Image src="/PL_flag2.png" width="70" height="70" />
                    <p className="text-[10px]">Saldo konta</p>
                    <p className="text-[14px] font-extrabold">171,00</p>
                    <p className="font-extrabold">PLN</p>
                  </div>
                </div>
              </div>

              {/* FULL ACCOUNT SUMMARY */}

              <div className="bg-slate-100 p-2 text-black">
                <h1 className="text-2xl font-bold">Moje konto główne</h1>
                <h2 className="mt-4 text-[12px] font-bold">
                  Łącznie PLN Saldo
                </h2>
                <div>
                  <div className="mt-4 flex items-center">
                    <Image src="/PL_flag2.png" width="90" height="90" />
                    <div className="flex flex-col">
                      <p className="text-2xl font-extrabold">171,00</p>
                      <p className="text-[10px] font-extrabold">PLN</p>
                    </div>
                  </div>
                  <div>
                    <div className="h-10 w-[90%] rounded-lg bg-yellow-300" />
                  </div>
                  {/* LEGEND */}
                  <div className="flex justify-between">
                    <div className="mt-2 flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-2 rounded-lg bg-yellow-300" />
                        <p className="text-[12px]">Dostępne:</p>
                      </div>
                      <p className="text-[12px] font-bold">171,00 PLN</p>
                    </div>
                    <div className="mt-2 flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-2 rounded-lg bg-gray-300" />
                        <p className="text-[12px]">Oczekujące:</p>
                      </div>
                      <p className="text-[12px] font-bold">0 PLN</p>
                    </div>
                    <div className="mt-2 flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-2 rounded-lg bg-gray-500" />
                        <p className="text-[12px]">Oszczędności i cele:</p>
                      </div>
                      <p className="text-[12px] font-bold">0 PLN</p>
                    </div>
                  </div>
                </div>

                {/* SAVINGS SUMMARY */}

                <h1 className="mt-8 mb-4 text-2xl font-bold">
                  Moje zaoszczędzone <br />
                  pieniądze
                </h1>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold">0,00 PLN</p>
                    <HiChevronRight className="text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-bold">+0,00 zł</p>
                    <p className="text-[10px]">
                      Odsetki uzyskane od początku3,0%)
                    </p>
                  </div>
                </div>

                {/* Saving targets */}
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-[14px] font-bold">Moje cele</h1>
                    <p className="text-[12px] font-bold text-blue-800">
                      Pokaż wszystko
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col items-center justify-center gap-4">
                    <p className="text-center text-[11px] text-black">
                      Masz <span className="font-bold">3</span> cele
                      oszczędnościowe do dyspozycji w Twoim planie
                    </p>
                    <button className="w-[80%] rounded-full bg-yellow-400 px-4 py-2 text-[10px] font-semibold">
                      Dodaj nowy cel
                    </button>
                  </div>
                </div>

                {/* OTHER CURRENCIES */}
                <div>
                  <h1 className="mt-8 mb-4 text-xl font-bold">
                    Konta walutowe
                  </h1>
                  <div className="">
                    <p className="mt-2 mb-2 text-[12px]">Moje EURSaldo</p>
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <Image
                          src="/EU_flag.png"
                          width="40"
                          height="30"
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-xl font-bold">0,00</p>
                          <p className="text-[8px]">
                            1 EUR = 4,780PLN (wg stanu na 14:00 14/01/23)
                          </p>
                        </div>
                      </div>
                      <HiChevronRight className="text-2xl" />
                    </div>
                  </div>
                  <div className="">
                    <p className="mt-2 mb-2 text-[12px]">Moje USDSaldo</p>
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <Image
                          src="/US_flag.png"
                          width="40"
                          height="30"
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-xl font-bold">0,00</p>
                          <p className="text-[8px]">
                            1 USD = 4,415PLN (wg stanu na 14:00 14/01/23)
                          </p>
                        </div>
                      </div>
                      <HiChevronRight className="text-2xl" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center gap-4">
                    <p className="text-center text-[11px] text-black">
                      Masz <span className="font-bold">4</span> kont walutowych
                      w Twoim planie
                    </p>
                    <button className="w-[80%] rounded-full border-2 border-black px-4 py-2 text-[10px] font-semibold">
                      Dodaj nowe konto
                    </button>
                  </div>
                </div>

                {/* LATEST ACTIVITY */}
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="mt-8 mb-4 text-xl font-bold">
                      Najnowsza <br />
                      aktywność
                    </h1>
                    <p className="text-[12px] font-bold text-blue-800">
                      Pokaż <br />
                      wszystko
                    </p>
                  </div>
                  {/* ACTIVITY */}
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <FaCcVisa className="text-2xl" />
                      <div>
                        <p className="text-[10px] font-semibold">costa 44</p>
                        <p className="text-[8px]">14 styczeń o 12:16</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px]">-15,15zł</p>
                    </div>
                  </div>
                  {/* ACTIVITY */}
                  <div className="mt-4 mb-4 flex justify-between">
                    <div className="flex space-x-4">
                      <div className="relative h-6 w-6 rounded-full border-2 border-black">
                        <p className="absolute top-0.5 left-0.5 text-[10px] font-bold">
                          DK
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold">
                          Darek Korczyc
                        </p>
                        <p className="text-[8px]">19 grudzień o 10:59</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px]">-30 zł</p>
                    </div>
                  </div>

                  {/* ACTIVITY */}
                  <div className="mt-4 mb-4 flex justify-between">
                    <div className="flex space-x-4">
                      <FaCcMastercard className="text-2xl" />
                      <div>
                        <p className="text-[10px] font-semibold">
                          Wpłać pieniądze kartą
                        </p>
                        <p className="text-[8px]">19 grudzień o 10:49</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px]">+200,00 zł</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginTrigger />
      )}

      {/* MOB FOOTER */}

      <MobFooter />
    </div>
  )
}

export default Money
