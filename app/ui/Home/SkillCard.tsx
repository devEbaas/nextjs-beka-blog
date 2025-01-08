interface SkillCardProps {
  title: string;
  skills: string[];
};
export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border-secondary border flex-1 min-w-[33%]">
      <div className="border-b border-secondary p-2">
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="flex flex-wrap p-2 gap-2">
        {skills.map((skill, index) => (
          <p key={index} className="text-xs text-secondary">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}