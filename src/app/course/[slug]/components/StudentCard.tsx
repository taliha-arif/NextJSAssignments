import { Student } from "@prisma/client";
import React from "react";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl uppercase">
              {student.name}
            </h2>
          </div>
          <p className="text-center">
            {student.registration_id}
          </p>
        </div>
      </div>
    </div>
  );
}