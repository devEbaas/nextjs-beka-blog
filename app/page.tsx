import { AboutMe } from "./ui/Home/AboutMe";
import { Banner } from "./ui/Home/Banner";
import { Skills } from "./ui/Home/Skills";

export default function Home() {
  return (
    <div className="flex h-full p-8 pb-20 gap-16 sm:p-20 bg-background sm:max-w-[800px] lg:max-w-[1260px]">
      <main className="flex flex-col gap-4">
        <Banner />
        <Skills />
        <AboutMe />
      </main>
    </div>
  );
}
