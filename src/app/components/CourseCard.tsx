import Link from "next/link";
import { CourseCardType } from "../page";

interface CourseCardProps {
	course: CourseCardType;
}

export default function CourseCard({ course }: CourseCardProps) {
	return (

		<Link href={`/course/${course.slug}`}>
			<div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer flex items-center justify-center bg-blue-100">
				<div className="p-1">
					<h3 className="font-bold text-2xl mb-2 text-black">
						{course.name}
					</h3>
				</div>
			</div>
		</Link>

	);
}
