import { Student } from "@prisma/client";
import StudentCard from "./StudentCard";

export default function Students({ students }: { students: Student[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        Till yet {students?.length} {students?.length === 1 ? "student" : "students"} {''}
        registered
      </h1>
      <div>
        {students?.map((student) => (
          <StudentCard student={student} key={student.id} />
        ))}
      </div>
    </div>
  );
}