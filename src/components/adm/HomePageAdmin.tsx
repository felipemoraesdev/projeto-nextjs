"use client"; // This is a client component 👈🏽

import Image from 'next/image';
import { EnvelopeSimple, GoogleLogo } from '@phosphor-icons/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';

import { poppins } from '@/app/fonts';

const claroLogoImg = '/assets/claro-logo.png';

export function HomePageAdmin() {

    // const router = useRouter()
    // const session = useSession();
    const params = useSearchParams()

    const hasAuthError = !!params.get('error');

    // if (session.data?.user?.email == 'felipemoraesdev@gmail.com') {
    //     router.push('/adm/dashboard');
    // }

    return (
        <main 
            className={`
                ${poppins.variable} flex min-h-screen flex-col items-center bg-slate-900 justify-center`
            }
        >
            <section className='flex flex-col items-center justify-center rounded-lg p-8'>

                <Image 
                    src={claroLogoImg} 
                    alt="claro-logo" 
                    width={100}
                    height={100}
                    className='mb-8'
                />

                <h1
                    className='font-medium text-2xl text-slate-100 mb-8'
                >
                    Faça seu Login
                </h1>

                <div className='flex flex-col items-center justify-center'>
                    <button 
                        className='
                            bg-red-700 text-slate-100 
                            text-lg px-4 py-2 rounded w-64 
                            mb-4 flex gap-4 items-center
                            hover:bg-red-800
                        '
                        onClick={() => signIn('google')}
                    >
                        <GoogleLogo size={32} color="#eeeded" weight="regular" />
                        <span>
                            Entrar com Google
                        </span>
                    </button>

                    {/* <button 
                        className='
                            bg-blue-500 text-slate-100 
                            text-lg px-4 py-2 rounded w-64 
                            mb-4 flex gap-4 items-center
                            hover:bg-blue-600
                        '
                        onClick={() => signIn('email')}
                    >
                        <EnvelopeSimple size={32} color="#eeeded" weight="regular" />
                        <span>
                            Entrar com E-mail
                        </span>
                    </button> */}
                </div>
                
                {hasAuthError && (
                    <span className='text-red-500 '>
                        Para acessar o sistema, efetue o login!
                    </span>
                )}

            </section>
        </main> 
    )
}