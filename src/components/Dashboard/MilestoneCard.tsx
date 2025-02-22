
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Milestone {
  id: number;
  title: string;
  date: string;
  completed: boolean;
}

interface MilestoneCardProps {
  milestones: Milestone[];
}

export const MilestoneCard = ({ milestones }: MilestoneCardProps) => {
  return (
    <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Milestones</h3>
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  milestone.completed ? "bg-green-100" : "bg-gray-200"
                }`}
              >
                {milestone.completed && <Check className="w-4 h-4 text-green-600" />}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{milestone.title}</h4>
                <p className="text-sm text-gray-500">{milestone.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
