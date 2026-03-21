import { systemStatuses } from "../constants/dashboardData";

export default function SystemStatusSection() {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-xl font-semibold">System status</h2>
      <div className="mt-4 space-y-4 text-sm">
        {systemStatuses.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-xl border px-4 py-3">
            <span>{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
