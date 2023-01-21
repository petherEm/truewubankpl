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

const Intro6 = () => {
  return (
    <div className="relative  min-h-[700px] w-[340px] rounded-2xl border-[1px] border-yellow-600">
      {/* Home Screen */}

      <Image src="/kyc_pending.png" layout="fill" className="rounded-2xl" />
    </div>
  )
}

export default Intro6
