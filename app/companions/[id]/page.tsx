interface Props {
  params: Promise<{ id: string }>;
}

export default async function CompanionSession({ params }: Props) {
  const { id } = await params;

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Session: {id}</h1>
      <p className="text-muted-foreground">
        Voice AI session page arrives on Day 4.
      </p>
    </main>
  );
}
