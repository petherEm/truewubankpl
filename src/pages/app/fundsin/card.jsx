import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import FundsInCard from '@/components/fundsin/FundsinCard'

export default function Card() {
  return (
    <div className="mx-auto md:max-w-6xl">
      <Head>
        <title>My Money - Western Union Digital Bank App</title>
        <meta name="description" content="" />
      </Head>

      <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
        <FundsInCard />
      </div>
    </div>
  )
}
