import Image from "next/image";
import { SectionTitle } from "../common/SectionTitle";

export function Contact() {
  return (
    <div className="flex flex-col gap-4 mt-8 lg:w-1/2">
      <SectionTitle title="Contacto" />
      <div className="flex flex-col gap-8">
        <div className="relative flex flex-col gap-8">
          <p className="text-secondary text-md">¿Necesitas ayuda?</p>
          <p className="text-secondary text-md">
            Estoy interesado en oportunidades laborales, colaboraciones y
            proyectos interesantes. Si tienes alguna pregunta o simplemente
            quieres saludar, no dudes en ponerte en contacto conmigo. ¡Estaré
            más que feliz de escucharte!
          </p>
        </div>
        <div className="flex flex-row gap-12 items-center justify-center">
          <div className="flex flex-row gap-2 items-baseline">
            <a href="mailto:eduardo.baas.kauil@gmail.com">
              <Image src="/gmail.svg" alt="gmail icon" width={42} height={42} />
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
                width={42}
                height={42}
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
                width={42}
                height={42}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
