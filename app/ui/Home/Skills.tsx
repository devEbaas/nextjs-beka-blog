import Image from "next/image";
import { LANGUAGE_SKILLS, DATABASE_SKILLS, FRAMEWORKS_SKILLS, OTHER_SKILLS, TOOLS_SKILLS } from "@/app/constants/skills"; 
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="font-semibold text-2xl">
        <span className="text-brand">#</span>Skills
      </h2>
      <div className="relative flex flex-row">
        <div className="w-full hidden flex-col items-center absolute top-0 left-0">
          <Image
            src="/skills-image.png"
            alt="skills"
            width={300}
            height={240}
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-row w-full flex-wrap gap-2 max-w-[50%]">
            <SkillCard title="Lenguajes" skills={LANGUAGE_SKILLS} />
          </div>
          <div className="flex flex-row w-full flex-wrap gap-2">
            <SkillCard title="Frameworks" skills={FRAMEWORKS_SKILLS} />
            <SkillCard title="Herramientas" skills={TOOLS_SKILLS} />
          </div>
          <div className="flex flex-row w-full flex-wrap gap-2">
            <SkillCard title="Bases de Datos" skills={DATABASE_SKILLS} />
            <SkillCard title="Otros" skills={OTHER_SKILLS} />
          </div>
        </div>
      </div>
    </div>
  );
}
