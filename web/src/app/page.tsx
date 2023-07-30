
import { Copyright } from '@/components/Copyright';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/SignIn';
import { EmptyMemories } from '@/components/EmptyMemories';
import { cookies } from 'next/headers';
import { Profile } from '@/components/Profile';

export default function Home() {

  const isAuthenticated = cookies().has('token')
  

  return (<main className="grid grid-cols-2 min-h-screen">
    {/* Left */}
    <div className="flex bg-[url(../assets/bg-stars.svg)] flex-col items-start overflow-hidden justify-between px-28 py-16 relative py-16 border-r border-white/10 pr-2">

      {/* Blur */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full h-[288px] w-[526px] bg-purple-700 opacity-50 blur-full"></div>
      {/* Stripes */}
      <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

      {/* Sign In */}
      { isAuthenticated ? <Profile /> : <SignIn />}
      {/* Hero */}
      <Hero />

      {/* Copyright */}
      <Copyright />

    </div>

    {/* Right*/}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <EmptyMemories/>
    </div>
  </main>)
}
