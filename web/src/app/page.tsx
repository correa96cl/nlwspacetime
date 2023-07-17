
import { User } from 'lucide-react';
import nlwLogo from '../assets/nlw-spacetime-logo.svg';
import Image from 'next/image';

export default function Home() {
  return (<main className="grid grid-cols-2 min-h-screen">
    {/* Left */}
    <div className="flex bg-[url(../assets/bg-stars.svg)] flex-col items-start overflow-hidden justify-between px-28 py-16 relative py-16 border-r border-white/10 pr-2">

      {/* Blur */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full h-[288px] w-[526px] bg-purple-700 opacity-50 blur-full"></div>
      {/* Stripes */}
      <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

      {/* Sign In */}
      <a href="" className=" transition-colors flex items-center gap-3 text-left hover:text-gray-50">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">

          <User className='h-5 w-5 text-gray-500' />

        </div>
        <p className='text-sm leading-snug max-w-[148px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
      </a>
      {/* Hero */}
      <div className='space-y-5'>
        <Image src={nlwLogo} alt="NLW Spacetime" />
        <div className='max-w-[420px] space-y-1'>
          <h1  className='leading-tight text-5xl font-bold text-gray-50'>Sua capsula do tempo</h1>
          <p className='text-lg leading-relaxed'>
            Colecione momentos marcantes da sua jornada e compartilha (se quiser) com o mundo!
          </p>
        </div>
        <a className='hover:bg-green-600 text-black leading-none inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase' href="">CADASTRAR LEMBRANÇA</a>
      </div>

      {/* Copyright */}
      <div className='text-sm leading-relaxed text-gray-200'>
        Feito com 💜 no NLW da{' '} <a 
        target='_blank'
   
        className='underline hover:text-gray-100' href="https://rocketseat.com.br">Rocketseat</a>
      </div>

    </div>

    {/* Right*/}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Voce ainda não registrou nenhuma lembrança, comece a {' '}
        </p>
      </div>
      <a href="" className="underline hover:text-gray-50">criar agora</a>
    </div>
  </main>)
}
