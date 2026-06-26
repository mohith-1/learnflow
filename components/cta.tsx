import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section flex-1">
      <div className="flex items-center justify-center h-24 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-dashed border-border text-4xl">
        🤖
      </div>
      <div className="cta-badge">Build your own</div>
      <h3 className="text-xl font-bold">Create a custom companion</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Pick a topic, choose a voice & personality, and start learning through
        natural voice conversations.
      </p>
      <Link href="/companions/new">
        <button className="btn-primary w-full justify-center">
          + Build Companion
        </button>
      </Link>
    </section>
  );
};

export default CTA;
