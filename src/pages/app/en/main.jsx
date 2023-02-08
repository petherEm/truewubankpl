import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import WelcomeEN from '@/components/screens/en/WelcomeEN'


export default function MainEN() {
  return (
    <div className="mx-auto md:max-w-6xl">
      <Head>
        <title>Western Union Digital Bank App</title>
        <meta name="description" content="" />
      </Head>

      <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
        <WelcomeEN />
        
      </div>
    </div>
  )
}
