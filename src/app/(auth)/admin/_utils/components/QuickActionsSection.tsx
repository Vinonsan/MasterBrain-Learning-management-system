import { quickActions } from "../constants/dashboardData";

export default function QuickActionsSection() {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-xl font-semibold">Today&apos;s focus</h2>
      <div className="mt-4 space-y-3">
        {quickActions.map((action) => (
          <div
            key={action}
            className="rounded-2xl border px-4 py-3 text-sm"
          >
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}
