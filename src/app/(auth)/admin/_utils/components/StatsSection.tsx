import { stats } from "../constants/dashboardData";

export default function StatsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-2xl border border-black/5 p-5">
          <p className="text-sm">{item.label}</p>
          <p className="mt-2 text-3xl font-bold">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
