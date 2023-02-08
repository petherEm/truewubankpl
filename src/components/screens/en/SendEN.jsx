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

import { useSession, signIn, signOut } from 'next-auth/react'

import MobFooterEN from '../../MobFooterEN'
import LoginTrigger from '../../LoginTrigger'

import { useRouter } from 'next/router'

const SendEN = () => {
  const { data: session } = useSession()

  const router = useRouter()

  return (
    <div className="h-auto w-full md:w-[400px]">
      {/* Money Screen */}

      {session ? (
        <div className="flex flex-col">
          <div className="flex flex-col px-4 text-white">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="mt-4 mb-4 text-xl font-bold">
                Send <br />
                Money
              </h1>
              <MdQrCodeScanner className="text-2xl text-yellow-400" />
            </div>

            {/* FREQUENT RECEIVERS */}

            <div className="mb-12">
              <div className="flex justify-between">
                <h1 className="text-sm font-bold">Contacts</h1>
                <p className="cursor-pointer text-[12px] text-yellow-500">
                  View all
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                    <FaUserPlus className="absolute top-3 left-4 text-2xl text-yellow-400" />
                  </div>
                  <p className="text-[12px] font-bold">Add new</p>
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
            <button
              onClick={() => router.push('/app/en/sendmoney/selectreceivers')}
              className="z-40 mx-auto -my-4 w-[80%] rounded-full bg-yellow-400 py-2 text-[12px] font-bold text-black"
            >
              Send money now
            </button>

            {/* SENDING ACTIVITY */}

            <div className="h-80 bg-slate-100 p-6 text-black">
              <h1 className="mt-4 text-[12px] font-bold">Activity</h1>
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
                      <p className="text-[8px]">19 December 10:59</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px]">-30,00 PLN</p>
                  </div>
                </div>
                <div className="mt-4 mb-4 flex justify-between">
                  <div className="flex space-x-4">
                    <div className="relative h-6 w-6 rounded-full border-2 border-black">
                      <p className="absolute top-0.5 left-0.5 text-[10px] font-bold">
                        DK
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold">Darek Korczyc</p>
                      <p className="text-[8px]">19 December 10:59</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px]">-30,00 PLN</p>
                  </div>
                </div>
                <div className="mt-4 mb-4 flex justify-between">
                  <div className="flex space-x-4">
                    <div className="relative h-6 w-6 rounded-full border-2 border-black">
                      <p className="absolute top-0.5 left-0.5 text-[10px] font-bold">
                        DK
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold">Darek Korczyc</p>
                      <p className="text-[8px]">19 December 10:59</p>
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
      ) : (
        <LoginTrigger />
      )}

      <MobFooterEN />
    </div>
  )
}

export default SendEN
