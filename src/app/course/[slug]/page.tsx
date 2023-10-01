import { PrismaClient, Student } from "@prisma/client";
import { notFound } from "next/navigation";
import CourseNavBar from "./components/CourseNavBar";
import Students from "./components/Students";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface Course {
  id: number;
  name: string;
  slug: string;
  students: Student[];
}

const fetchCourseBySlug = async (slug: string): Promise<Course> => {
  const course = await prisma.courses.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      students: true,
    },
  });


  if (!course) {
    notFound();
  }

  return course;
};

export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchCourseBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <CourseNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Students students={restaurant.students} />
      </div>
    </>
  );
}