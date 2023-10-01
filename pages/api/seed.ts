// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {

	await prisma.courses.deleteMany();
	await prisma.student.deleteMany();


	await prisma.courses.createMany({
		data: [
			{ name: "DSA", slug: "dsa-course-semester-4" },
			{ name: "DB", slug: "db-course-semester-4" },
			{ name: "OOP", slug: "oop-course-semester-3" }
		],
	});


	const courses = await prisma.courses.findMany();
	const dsaID =
		courses.find((course) => course.name === "DSA")
			?.id || 1;
	const dbID =
		courses.find((course) => course.name === "DB")
			?.id || 1;
	const oopID =
		courses.find((course) => course.name === "OOP")
			?.id || 1;

	await prisma.student.createMany({
		data: [{
			name: "John",
			registration_id: "l1s16002",
			course_id: dsaID,
		},
		{
			name: "Martin",
			registration_id: "l1s16001",
			course_id: oopID,
		},
		{
			name: "James",
			registration_id: "l1s16003",
			course_id: dbID,
		},
		{
			name: "Lisa",
			registration_id: "l1s16007",
			course_id: oopID,
		},
		{
			name: "Sara",
			registration_id: "l1s16009",
			course_id: dsaID,
		}],
	});


	res.status(200).json({ name: "hello" });
}
