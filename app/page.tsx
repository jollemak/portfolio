import Hero from "@/components/Hero";
import Grid from "@/components/Grid";


export default function Home() {
  return <main className="relative bg-gray-900 min-h-screen
    flex flex-col items-center justify-center
    text-white overflow-hidden
    mx-auto sm:px-10 px-5">
    <Hero />
    <Grid />
  </main>;
}
