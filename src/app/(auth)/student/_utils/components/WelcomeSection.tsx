
type Props = {
  name: string;
};

const WelcomeSection = ({ name }: Props) => {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-dark">Welcome  {name} </h1>
      <p className="mt-1 text-sm text-zinc-600">Continue learning and track your course progress.</p>
    </section>
  );
};

export default WelcomeSection;
