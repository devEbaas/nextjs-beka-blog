import { Banner } from "./ui/Home/Banner";

export default function Home() {
  return (
    <div className="flex h-full p-8 pb-20 gap-16 sm:p-20 bg-background">
      <main className="flex flex-col gap-4">
        <Banner />
      </main>
    </div>
  );
}
