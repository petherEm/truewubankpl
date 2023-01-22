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
import LoginTrigger from '../LoginTrigger'

import MobFooter from '../MobFooter'

import Switch from 'react-switch'

const Profile = () => {
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
                  <img src={session.user.image} className="h-full w-full rounded-full" />
                </div>
              </div>
            </div>

            {/* HEADER */}
            <div className="mt-4 mb-14 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-bold">5 Punkty WU</p>
                  <p className="text-[11px] font-bold">Plan Premium</p>
                  <p className="text-[9px]">Odnawia się za luty 2023</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdQrCodeScanner className="text-md text-yellow-400" />
                  <p className="text-[8px] text-yellow-400">Mój kod QR</p>
                </div>
              </div>

              <button className="mx-auto w-fit rounded-full border-2 px-4 py-1 text-[12px] font-bold">
                Zaproś znajomych do WU
              </button>
            </div>

            {/* CTA button */}
            <button className="z-40 mx-auto -my-4 w-[80%] rounded-full bg-yellow-400 py-2 text-[12px] font-bold text-black">
              Zarządzaj planem
            </button>

            {/* SETTINGS */}

            <div className="flex h-auto flex-col gap-4 bg-slate-100 p-6 text-black">
              {/* PROFILE SETTINGS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Profil</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Dane osobowe</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Wyciągi</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* SECURITY SETTINGS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Bezpieczeństwo</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Zmień hasło</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Zmień hasło</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Włącz biometrię</h2>
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
                <h1 className="mt-4 text-[12px] font-bold">Ustawienia</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Język</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Widoczność profilu</h2>
                  <Switch
                    onChange={() => null}
                    checked
                    height={24}
                    width={50}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[10px]">
                    Szybko wysyłaj i odieraj pieniądze ze znajomymi na Western
                    Union Digital Bankingudostępniając swój profil w
                    wyszukiwarce.
                  </h2>
                </div>
              </div>

              {/* NOTIFICATIONS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">Powiadomienia</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">
                    Skonfiguruj preferencje powiadomień
                  </h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* TERMS AND CONDITIONS */}
              <div className="flex flex-col gap-2">
                <h1 className="mt-4 text-[12px] font-bold">
                  Informacje prawne
                </h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Zasady ochrony prywatności</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px]">Warunki</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* HELP FAQ */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-bold">
                    Potrzebujesz pomocy?
                  </h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-bold">Wyślij opinię</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-bold">Licencje</h2>
                  <HiChevronRight className="text-[12px]" />
                </div>
              </div>

              {/* LOGOUT */}
              <button className="mx-auto w-[80%] rounded-full border-2 border-black px-4 py-2 text-[10px] font-semibold">
                Wyloguj
              </button>
              <p className="text-center text-[12px] text-slate-500">
                Wersja 5.39
              </p>
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

export default Profile
