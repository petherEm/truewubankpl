import { useEffect, useRef } from 'react'
import { SessionProvider } from 'next-auth/react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router, session }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <SessionProvider session={session}>
      <div className="relative">
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  )
}
