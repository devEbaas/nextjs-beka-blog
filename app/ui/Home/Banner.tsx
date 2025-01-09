import Image from "next/image";

export function Banner() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold leading-snug lg:text-5xl">
          Soy Eduardo, <span className="text-brand">React developer</span> y{" "}
          <span className="text-brand">React Native developer</span>
        </h1>
        <p className="text-secondary text-sm lg:text-lg">
          Desarrollo sitios y aplicaciones web con React y Nextjs así como
          tambien aplicaciones multiplataforma para IOS y Android usando React
          Native
        </p>
      </div>
      <div className="w-full gap-4 flex flex-col">
        <div className="w-full flex-col items-center flex">
          <Image
            src="/banner-image.png"
            alt="banner"
            width={290}
            height={240}
          />
          <div className="border-secondary border w-full max-w-80">
            <p className="text-secondary text-xs p-4">
              Trabajando en mi sitio web y portafolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};