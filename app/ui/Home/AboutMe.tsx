import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export function AboutMe() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="font-semibold text-2xl">
        <span className="text-brand">#</span>Sobre mi
      </h2>

      <p className="text-secondary text-sm">!Hola, soy Eduardo¡</p>
      <p className="text-secondary text-sm">
        Soy un desarrollador especializado en aplicaciones web y móviles,
        trabajando con tecnologías modernas como Next.js, React.js y React
        Native. Me apasiona crear soluciones escalables, centradas en la
        experiencia del usuario, mientras mantengo un enfoque constante en el
        aprendizaje continuo y la mejora de mis habilidades.
      </p>
      <p className="text-secondary text-sm">
        Disfruto enfrentar desafíos técnicos, trabajar con herramientas como
        TypeScript y Tailwind CSS, y mantenerme al día con las últimas
        tendencias en desarrollo. Mi objetivo es construir productos innovadores
        que ofrezcan valor real a los usuarios, combinando creatividad,
        eficiencia y trabajo en equipo.
      </p>
      <button className="w-32 border border-brand px-2 py-1 flex items-center justify-center gap-2">
        <p className="text-sm">Leer más</p>
        <ArrowLongRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}