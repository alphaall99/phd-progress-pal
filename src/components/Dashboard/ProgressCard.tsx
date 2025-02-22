
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  title: string;
  progress: number;
  total: number;
  subtitle?: string;
}

export const ProgressCard = ({ title, progress, total, subtitle }: ProgressCardProps) => {
  const percentage = (progress / total) * 100;

  return (
    <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="space-y-2">
          <Progress value={percentage} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium text-gray-700">
              {progress} of {total}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
