import React from 'react'
import Image from 'next/image'
import { HiChevronLeft } from 'react-icons/hi'

import { useRouter } from 'next/router'

const FundsinMTCNENG = () => {
  const router = useRouter()

  return (
    <div id="fundsIn-MTCN" className="h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex h-auto min-h-[500px] flex-col rounded-2xl bg-slate-100 pb-10">
        <div className="flex flex-col gap-2 px-4 text-white">
          {/* NAVIGATION ARROWS */}
          <div
            onClick={() => router.push('/app/en/fundsin')}
            className="mt-8 flex cursor-pointer items-center justify-between space-x-6 p-2 font-bold"
          >
            <HiChevronLeft className="text-2xl text-slate-800" />
          </div>

          <div>
            <h1 className="mb-4 text-xl font-bold text-black">
              What is your tracking number (MTCN) ?
            </h1>
            <p className="text-[14px] text-black">
              To track a transfer, enter your 10 digit tracking number.
            </p>

            {/* MTCN Funding */}
            <div className="mt-2 flex flex-col gap-4 text-black">
              <div className="mb-16">
                <input
                  type="number"
                  placeholder="Tracking number (10 digits)"
                  className="z-8 h-10 w-full rounded-lg bg-slate-200 px-3 text-black outline-none"
                />
              </div>

              {/* CTA */}

              <button className="mt-2 rounded-full px-4 py-3 text-[14px] font-semibold text-blue-700 ">
                Ask the sender for MTCN
              </button>
              <button className="mt-2 rounded-full bg-yellow-400 px-4 py-3 text-[14px] font-semibold text-black hover:bg-yellow-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundsinMTCNENG
