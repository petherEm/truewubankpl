import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import MoneyEN from '@/components/screens/en/MoneyEN'

export default function MyMoneyEN() {
  return (
    <div className="mx-auto md:max-w-6xl">
      <Head>
        <title>My Money - Western Union Digital Bank App</title>
        <meta name="description" content="" />
      </Head>

      <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
        <MoneyEN />
      </div>
    </div>
  )
}
