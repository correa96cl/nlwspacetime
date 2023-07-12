
export default function Home() {
  return (<main className="grid grid-cols-2 min-h-screen">
    {/* Left */}
    <div className="flex flex-col items-start justify-between px-28 py-16 relative">
<div className="absolute right-8 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50"></div>
    </div>

    {/* Right*/}
    <div className="flex flex-col p-16">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Voce ainda não registrou nenhuma lembrança, comece a {' '}
        </p>
      </div>
      <a href="" className="underline hover:text-gray-50">criar agora</a>
    </div>
  </main>)
}
