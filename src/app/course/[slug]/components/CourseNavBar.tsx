import Link from "next/link";

export default function CourseNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/course/${slug}`} className="mr-7">
        Overview
      </Link>
    </nav>
  );
}