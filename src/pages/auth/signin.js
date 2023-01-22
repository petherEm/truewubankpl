import React from 'react'
import Image from 'next/image'
import { getProviders, signIn as SignInToProvider } from 'next-auth/react'

const signIn = ({ providers }) => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
        <div className="h-[820px] w-full md:w-[400px]">
          <div className="flex flex-col px-4 text-white">
            <header className="mt-2 flex items-center justify-between">
              <Image src="/logo.svg" width="220" height="100" />
            </header>
            <h1 className="mt-8 mb-4 text-4xl font-bold text-yellow-400">
              Hej!
            </h1>
            <h2>Jeszcze jeden krok</h2>

            <div className="mt-40 flex flex-col items-center justify-center">
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button
                    className="rounded-full bg-yellow-400 px-6 py-3 text-xl font-bold text-black hover:bg-yellow-600"
                    onClick={() =>
                      SignInToProvider(provider.id, {
                        callbackUrl: '/app/main',
                      })
                    }
                  >
                    Zaloguj się z {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
