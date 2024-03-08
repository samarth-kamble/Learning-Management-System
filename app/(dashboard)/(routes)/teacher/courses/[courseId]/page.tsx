import { IconBadge } from "@/components/shared/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  // Auth check for the teacher
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  // Fetch the course from the database
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  // If the course does not exist, redirect to the home page
  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all Fields {completionText}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customize Your Course</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
