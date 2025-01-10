import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col px-4 gap-2 mt-8 border-t border-secondary w-full py-8 sm:px-8 relative">
      <div className="z-10">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/header-logo.webp"
            alt="header logo"
            width={20}
            height={20}
          />
          <p className="font-semibold text-lg text-white">Eduardo</p>
        </div>
        <p className="text-secondary text-sm">
          Desarrollador frontend web y mobile
        </p>
        <div className="mb-8 flex gap-4">
          <div className="flex flex-row gap-2 items-baseline">
            <a href="mailto:eduardo.baas.kauil@gmail.com">
              <Image src="/gmail.svg" alt="gmail icon" width={28} height={28} />
            </a>
          </div>
          <div className="flex flex-row gap-2 items-baseline">
            <a
              href="https://github.com/devEbaas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-dark.svg"
                alt="github icon"
                width={28}
                height={28}
              />
            </a>
          </div>
          <div className="flex flex-row gap-2 items-baseline">
            <a
              href="https://linkedin.com/in/eduardo-baas-kauil-b42a90154"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="github icon"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-sm text-white">Hecho con ❤️ por Beka</p>
          <p className="text-white text-sm">2025</p>
        </div>
      </div>
      {/* <Image
        src="/wave-haikei.svg"
        width={200}
        height={100}
        alt="footer background"
        className="w-full h-[200px] absolute top-0 left-0"
      /> */}
    </footer>
  );
}
