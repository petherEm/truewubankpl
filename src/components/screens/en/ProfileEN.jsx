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
import LoginTrigger from '../../LoginTrigger'

import MobFooterEN from '../../MobFooterEN'

import Switch from 'react-switch'

const ProfileEN = () => {
  const { data: session } = useSession()

  return (
    <div className="h-[820px] w-full md:w-[400px]">
      {/* Money Screen */}

      {session ? (
        <div className="flex flex-col">
          <div className="flex flex-col px-4 text-white">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="mt-4 mb-4 text-xl font-bold">
                {session.user.name}
              </h1>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  {/* <p className="absolute top-3 left-3 text-[18px] font-bold">
                    PM
                  </p> */}
                  <img
                    src={session.user.image}
                    className="h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* HEADER */}
            <div className="mt-4 mb-14 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-bold">25 MyWU Points</p>
                  <p className="text-[11px] font-bold">Premium plan</p>
                  <p className="text-[9px]">Renews in March 2023</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdQrCodeScanner className="text-md text-yellow-400" />
                  <p className="text-[8px] text-yellow-400">My QR code</p>
                </div>
              </div>

              <button className="mx-auto w-fit rounded-full border-2 px-4 py-1 text-[12px] font-bold">
                Invite friends to WU
              </button>
            </div>

            {/* CTA button */}
            <button className="z-40 mx-auto -my-4 w-[80%] rounded-full bg-yellow-400 py-2 text-[12px] font-bold text-black">
              Manage plan
            </button>

            {/* SETTINGS */}

            <div className="flex h-auto flex-col gap-4 bg-slate-100 p-6 text-black">
              {/* PROFILE SETTINGS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Profile</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Personal details</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Statements</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* SECURITY SETTINGS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Security</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Change passcode</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Change password</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Enable biometrics</h2>
                  <Switch
                    onChange={() => null}
                    checked
                    height={24}
                    width={50}
                  />
                </div>
              </div>

              {/* OTHER SETTINGS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Settings</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Language</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Profile visibility</h2>
                  <Switch
                    onChange={() => null}
                    checked
                    height={24}
                    width={50}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[10px]">
                    Send and receive money quickly with friendson Western Union
                    Digital Banking by making your profile available in search.
                  </h2>
                </div>
              </div>

              {/* NOTIFICATIONS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Notifications</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">
                    Set up notifications preferences
                  </h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* TERMS AND CONDITIONS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">
                  Legal
                </h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Privacy Policy</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Terms and Conditions</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* HELP FAQ */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-bold">
                    Need help? 
                  </h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-bold">Send feedback</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-bold">Licenses</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* LOGOUT */}
              <button className="mx-auto w-[80%] rounded-full border-2 border-black px-4 py-2 text-[10px] font-semibold">
                Log out
              </button>
              <p className="text-center text-[12px] text-slate-500">
                Version 5.39
              </p>
            </div>
          </div>
        </div>
      ) : (
        <LoginTrigger />
      )}

      {/* MOB FOOTER */}
      <MobFooterEN />
    </div>
  )
}

export default ProfileEN
