import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import Send from '@/components/screens/Send'
import Profile from '@/components/screens/Profile'

export default function MyProfile() {
  return (
    <div className="mx-auto md:max-w-6xl">
      <Head>
        <title>My Profile - Western Union Digital Bank App</title>
        <meta name="description" content="" />
      </Head>

      <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
        <Profile />
      </div>
    </div>
  )
}
