
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

interface TasksCardProps {
  tasks: Task[];
}

export const TasksCard = ({ tasks }: TasksCardProps) => {
  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Tasks</h3>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  task.completed ? "bg-green-100" : "bg-gray-200"
                }`}
              >
                {task.completed && <Check className="w-4 h-4 text-green-600" />}
              </div>
              <span className="text-gray-800">{task.title}</span>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
