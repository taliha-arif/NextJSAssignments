import Header from "./components/Header";
import CourseCard from "./components/CourseCard";
import { Student } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export interface CourseCardType {
	id: number;
	name: string;
	slug: string;
	students: Student[];
}

const prisma = new PrismaClient();

const fetchCourses = async (): Promise<CourseCardType[]> => {
	const studentCourses = await prisma.courses.findMany(
		{select: {
			id: true,
			name: true,
			slug: true,
			students: true
		}}
	);
	return studentCourses;
}

export default async function Home() {
	const courses = await fetchCourses();

	return (
		<main>
			<Header />
			<div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
				{courses.map((course) => (
					<CourseCard course={course} />
				))}
			</div>
		</main>
	);
}
