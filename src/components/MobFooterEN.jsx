import React from 'react'
import { HiTemplate, HiUserCircle } from 'react-icons/hi'
import { AiFillWallet, AiFillStar } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'

import { useRouter } from 'next/router'

const MobFooterEN = () => {
  const router = useRouter()

  return (
    <footer className="sticky -bottom-1 bg-black text-slate-600">
      <hr className="h-2" />
      <div className="flex items-center justify-between px-5 py-2">
        <div
          onClick={() => router.push('/app/en/main')}
          className="flex cursor-pointer flex-col items-center"
        >
          <HiTemplate className="text-2xl" />
          <p className="text-[8px]">Dashboard</p>
        </div>
        <div
          onClick={() => router.push('/app/en/mymoney')}
          className="flex cursor-pointer flex-col items-center hover:text-yellow-400"
        >
          <AiFillWallet className="text-2xl" />
          <p className="text-[8px]">Money</p>
        </div>
        <div
          onClick={() => router.push('/app/en/sendmoney')}
          className="flex cursor-pointer flex-col items-center hover:text-yellow-400"
        >
          <TbArrowsLeftRight className="text-2xl" />
          <p className="text-[8px]">Send</p>
        </div>
        <div className="flex cursor-pointer flex-col items-center hover:text-yellow-400">
          <AiFillStar className="text-2xl" />
          <p className="text-[8px]">Rewards</p>
        </div>
        <div
          onClick={() => router.push('/app/en/myprofile')}
          className="flex cursor-pointer flex-col items-center hover:text-yellow-400"
        >
          <HiUserCircle className="text-2xl" />
          <p className="text-[8px]">Profile</p>
        </div>
      </div>
    </footer>
  )
}

export default MobFooterEN
