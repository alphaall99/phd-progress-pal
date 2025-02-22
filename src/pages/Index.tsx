
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/Dashboard/ProgressCard";
import { MilestoneCard } from "@/components/Dashboard/MilestoneCard";
import { TasksCard } from "@/components/Dashboard/TasksCard";

const Index = () => {
  // Sample data - in a real app, this would come from your backend
  const milestones = [
    {
      id: 1,
      title: "Research Proposal Approved",
      date: "2024-02-15",
      completed: true,
    },
    {
      id: 2,
      title: "Literature Review Complete",
      date: "2024-03-01",
      completed: true,
    },
    {
      id: 3,
      title: "Data Collection Phase",
      date: "2024-05-30",
      completed: false,
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Review latest journal papers",
      completed: false,
      priority: "high" as const,
    },
    {
      id: 2,
      title: "Prepare methodology section",
      completed: true,
      priority: "medium" as const,
    },
    {
      id: 3,
      title: "Update research timeline",
      completed: false,
      priority: "low" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          <ProgressCard
            title="Overall Progress"
            progress={35}
            total={100}
            subtitle="PhD Completion"
          />
          <ProgressCard
            title="Publications"
            progress={2}
            total={4}
            subtitle="Required Papers"
          />
          <ProgressCard
            title="Data Collection"
            progress={250}
            total={500}
            subtitle="Samples Collected"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <MilestoneCard milestones={milestones} />
          <TasksCard tasks={tasks} />
        </div>
      </main>
    </div>
  );
};

export default Index;
