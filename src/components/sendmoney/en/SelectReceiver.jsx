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
import { useRouter } from 'next/router'

const SelectReceiver = () => {
  const router = useRouter()

  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex cursor-pointer items-center justify-between space-x-6 p-2 font-bold">
            <HiChevronLeft
              onClick={() => router.push('/app/en/sendmoney')}
              className="text-2xl text-slate-800"
            />
            <p
              onClick={() => router.push('/app/en/sendmoney/newuser')}
              className="text-blue-800"
            >
              New
            </p>
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-xl font-bold text-black">
              Who are you sending to?
            </h1>

            <input
              type="number"
              placeholder="Zacznij pisać"
              className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
            />

            {/* RECEIVERS */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              {/* RECEIVER'S DETAILS */}

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-md mt-4 mb-4 font-bold text-black">
                    Favorites (03)
                  </h1>
                </div>

                {/* FAVOURITES RECEIVERS */}
                <div className="flex flex-col gap-4">
                  {/* RECEIVER */}
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-4">
                        <div className="relative h-10 w-10 rounded-full border-2 border-black">
                          <p className="absolute top-2 left-2 text-[14px] font-bold">
                            DK
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">Darek Korczyc</p>
                    </div>
                    <FaInfoCircle className="cursor-pointer text-blue-800" />
                  </div>

                  {/* RECEIVER */}
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-4">
                        <div className="relative h-10 w-10 rounded-full border-2 border-black">
                          <p className="absolute top-2 left-2 text-[14px] font-bold">
                            KD
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">Klaudia</p>
                    </div>
                    <FaInfoCircle className="cursor-pointer text-blue-800" />
                  </div>

                  {/* RECEIVER */}
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-4">
                        <div className="relative h-10 w-10 rounded-full border-2 border-black">
                          <p className="absolute top-2 left-2 text-[14px] font-bold">
                            MN
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">Miroslaw Nowak</p>
                    </div>
                    <FaInfoCircle className="cursor-pointer text-blue-800" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-md mt-4 mb-4 font-bold text-black">
                    All (03)
                  </h1>
                </div>

                {/* ALL RECEIVERS */}
                <div className="flex flex-col gap-4">
                  {/* RECEIVER */}
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-4">
                        <div className="relative h-10 w-10 rounded-full border-2 border-black">
                          <p className="absolute top-2 left-2 text-[14px] font-bold">
                            DK
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">Darek Korczyc</p>
                    </div>
                    <FaInfoCircle className="cursor-pointer text-blue-800" />
                  </div>

                  {/* RECEIVER */}
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-4">
                        <div className="relative h-10 w-10 rounded-full border-2 border-black">
                          <p className="absolute top-2 left-2 text-[14px] font-bold">
                            KD
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">Klaudia</p>
                    </div>
                    <FaInfoCircle className="cursor-pointer text-blue-800" />
                  </div>

                  {/* RECEIVER */}
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-4">
                        <div className="relative h-10 w-10 rounded-full border-2 border-black">
                          <p className="absolute top-2 left-2 text-[14px] font-bold">
                            MN
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">Miroslaw Nowak</p>
                    </div>
                    <FaInfoCircle className="cursor-pointer text-blue-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectReceiver
