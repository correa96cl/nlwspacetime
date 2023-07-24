import Image from "next/image";
import nlwLogo from '../assets/nlw-spacetime-logo.svg';


export function Hero(){
    return(
        <div className='space-y-5'>
            <Image src={nlwLogo} alt="NLW Spacetime" />
            <div className='max-w-[420px] space-y-1'>
                <h1 className='leading-tight text-5xl font-bold text-gray-50'>Sua capsula do tempo</h1>
                <p className='text-lg leading-relaxed'>
                    Colecione momentos marcantes da sua jornada e compartilha (se quiser) com o mundo!
                </p>
            </div>
            <a className='hover:bg-green-600 text-black leading-none inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase' href="">CADASTRAR LEMBRANÇA</a>
        </div>
    )
}