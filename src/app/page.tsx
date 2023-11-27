import Posts from "@/components/Posts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className='mt-[100px] px-5 sm:px-10  md:px-[150px] py-10'>
      <Profile/>
      <Posts/>
    </main>
  )
}
