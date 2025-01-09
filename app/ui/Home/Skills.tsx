import Image from "next/image";
import { LANGUAGE_SKILLS, DATABASE_SKILLS, FRAMEWORKS_SKILLS, OTHER_SKILLS, TOOLS_SKILLS } from "@/app/constants/skills"; 
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="font-semibold text-2xl lg:text-3xl">
        <span className="text-brand">#</span>Skills
      </h2>
      <div className="relative flex flex-row gap-8 items-center">
        <div className="w-full hidden flex-col items-center lg:flex lg:w-[800px]">
          <Image
            src="/skills-image.png"
            alt="skills"
            width={300}
            height={240}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-[auto,auto,auto] gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <SkillCard title="Lenguajes" skills={LANGUAGE_SKILLS} />
          <SkillCard title="Frameworks" skills={FRAMEWORKS_SKILLS} />
          <SkillCard title="Herramientas" skills={TOOLS_SKILLS} />
          <div className="hidden lg:block lg:col-span-1" />
          <SkillCard title="Bases de Datos" skills={DATABASE_SKILLS} />
          <div className="col-span-2 lg:col-span-1">
            <SkillCard title="Otros" skills={OTHER_SKILLS} />
          </div>
        </div>
        {/* <div className="flex flex-col w-full gap-4">
          <div className="flex flex-row w-full flex-wrap gap-2 lg:max-w-full">
            <SkillCard title="Lenguajes" skills={LANGUAGE_SKILLS} />
            <SkillCard title="Frameworks" skills={FRAMEWORKS_SKILLS} />
            <SkillCard title="Herramientas" skills={TOOLS_SKILLS} />
          </div>
          <div className="flex flex-row w-full flex-wrap gap-2 justify-end">
            <div className="w-full lg:w-2/3 flex flex-row flex-wrap gap-2">
              <SkillCard title="Bases de Datos" skills={DATABASE_SKILLS} />
              <SkillCard title="Otros" skills={OTHER_SKILLS} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
