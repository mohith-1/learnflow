import Link from "next/link";
import { cn } from "@/lib/utils";
import { Companion } from "@/types";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  className?: string;
}

const CompanionsList = ({
  title,
  companions,
  className,
}: CompanionsListProps) => {
  return (
    <article className={cn("companion-list", className)}>
      <h2 className="font-bold text-2xl mb-4">{title}</h2>

      {companions && companions.length > 0 ? (
        <div className="flex flex-col gap-2">
          {companions.map((c) => (
            <Link
              key={c.id}
              href={`/companions/${c.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{c.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {c.subject} · {c.topic}
                </p>
              </div>
              <span className="text-xs text-muted-foreground font-mono shrink-0">
                {c.duration}m
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm py-8 text-center">
          No sessions yet. Launch a lesson to get started.
        </p>
      )}
    </article>
  );
};

export default CompanionsList;
