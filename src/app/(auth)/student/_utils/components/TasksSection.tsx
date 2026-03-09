import { ClipboardList } from "lucide-react";

type Task = {
  title: string;
  due: string;
};

type Props = {
  tasks: Task[];
};

const TasksSection = ({ tasks }: Props) => {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <ClipboardList className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-bold text-dark">Pending Assignments / Exams</h2>
      </div>

      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-lg border border-black/10 px-4 py-3"
          >
            <p className="font-medium text-dark">{task.title}</p>
            <span className="text-sm text-zinc-500">{task.due}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TasksSection;

