const stats = [
  { label: "Total Students", value: "1,284", change: "+12% this month" },
  { label: "Active Courses", value: "18", change: "+3 new courses" },
  { label: "Pending Payments", value: "46", change: "Need review today" },
  { label: "Support Tickets", value: "09", change: "2 urgent requests" },
];

const recentActivities = [
  "New student registration received from Jaffna.",
  "React Advanced course updated with 2 new lessons.",
  "Payment marked pending for invoice #MB-2026-031.",
  "Student support ticket assigned to admin team.",
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-8 text-white shadow-2xl shadow-slate-300/40">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-300">
            Dashboard Overview
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Build your admin panel from a strong starting point.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            This starter page gives you a clean layout, summary cards, quick
            actions, and a recent activity section. Next we can connect real
            data, authentication, and separate admin pages.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
            Add New Course
          </button>
          <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            View Reports
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{item.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              {item.value}
            </h2>
            <p className="mt-2 text-sm font-medium text-emerald-600">
              {item.change}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Recent Activity
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Latest admin updates
              </h2>
            </div>
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Refresh
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={activity}
                className="flex gap-4 rounded-2xl bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-sm font-bold text-red-600">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{activity}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Replace this dummy content with API data later.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Quick Actions</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Common admin tasks
          </h2>

          <div className="mt-6 space-y-3">
            {[
              "Approve student registrations",
              "Publish a new course module",
              "Review payment confirmations",
              "Respond to student messages",
            ].map((task) => (
              <button
                key={task}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left text-sm font-medium text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              >
                <span>{task}</span>
                <span>Open</span>
              </button>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
