import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="flex flex-col mt-8 lg:flex-row lg:gap-44 lg:mt-28">
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="font-semibold text-2xl lg:text-3xl">
          <span className="text-brand">#</span>Sobre mi
        </h2>

        <p className="text-secondary text-md">!Hola, soy Eduardo¡</p>
        <p className="text-secondary text-md">
          Soy un desarrollador especializado en aplicaciones web y móviles,
          trabajando con tecnologías modernas como Next.js, React.js y React
          Native. Me apasiona crear soluciones escalables, centradas en la
          experiencia del usuario, mientras mantengo un enfoque constante en el
          aprendizaje continuo y la mejora de mis habilidades.
        </p>
        <p className="text-secondary text-md">
          Disfruto enfrentar desafíos técnicos, trabajar con herramientas como
          TypeScript y Tailwind CSS, y mantenerme al día con las últimas
          tendencias en desarrollo. Mi objetivo es construir productos
          innovadores que ofrezcan valor real a los usuarios, combinando
          creatividad, eficiencia y trabajo en equipo.
        </p>
        <button className="w-32 border border-brand px-2 py-1 flex items-center justify-center gap-2">
          <p className="text-sm">Leer más</p>
          <ArrowLongRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="w-1/3 min-w-[340px]">
        <Image
          src="/about-me.png"
          alt="about me image"
          width={340}
          height={505}
        />
      </div>
    </div>
  );
}