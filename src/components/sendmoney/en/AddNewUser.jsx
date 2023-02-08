import React from 'react'
import Image from 'next/image'
import { HiChevronLeft } from 'react-icons/hi'

import Switch from 'react-switch'
import { useRouter } from 'next/router'

const AddNewUser = () => {
  const router = useRouter()

  return (
    <div className="h-auto min-h-[500px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <div className="flex h-auto flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-8 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div className="mt-8 flex items-center justify-between space-x-6 p-2 font-bold">
            <div onClick={() => router.push('/app/en/sendmoney/selectreceivers')}>
              <HiChevronLeft className="text-2xl text-slate-800 cursor-pointer" />
            </div>

            <p className="cursor-pointer text-blue-800">Import</p>
          </div>

          <div>
            <h1 className="mt-4 mb-4 text-3xl font-bold text-black">
              New individual <br />
              contact <br />
            </h1>

            {/* SEND DETAILS */}
            <div className="mt-8 flex flex-col gap-4 text-black">
              <div className="flex justify-between space-x-2">
                <div classsName="">
                  <p className="ml-4 w-fit text-[10px] text-black placeholder:text-[12px] placeholder:text-slate-700">
                    Country
                  </p>
                  <input
                    type="text"
                    placeholder="Code"
                    className="z-8 h-10 w-[80px] rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                  />
                </div>
                <div className="">
                  <p className="ml-4 text-[10px] text-slate-200">
                    Phone number
                  </p>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="z-8 h-10 w-[180px] rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                  />
                </div>
              </div>
              <p className="mt-6 mb-6 text-[12px]">
                Add a phone number to check if your receiver has Western Union
                Digital Banking account. If yes, you can send money to them
                instantly and for free.
              </p>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Metoda doręczenia</p> */}
                <input
                  type="text"
                  placeholder="Nickname"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Kwota przekazu</p> */}
                <input
                  type="text"
                  placeholder="Legal first name"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Kwota przekazu</p> */}
                <input
                  type="text"
                  placeholder="Legal middle name"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                {/* <p className="ml-4 text-[10px] text-black">Kwota przekazu</p> */}
                <input
                  type="text"
                  placeholder="Legal last name"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <h1 className="font-bold">Payout Method</h1>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Country</p>
                <input
                  type="text"
                  placeholder="Albania"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Currency</p>
                <input
                  type="text"
                  placeholder="Albanian Lek"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="">
                <p className="ml-4 text-[10px] text-black">Method</p>
                <input
                  type="text"
                  placeholder="-Select-"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none placeholder:text-[12px] placeholder:text-slate-700"
                />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-[12px]">Save as favorite:</h2>
                <Switch onChange={() => null} checked height={24} width={50} />
              </div>

              {/* BUTTON FOR VIDEO VERIFICATION */}
              <button className="mt-8 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Save and continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewUser
