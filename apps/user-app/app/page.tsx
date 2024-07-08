import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Home() {
  return (
    <div className="bg-red-300 border-2 border-green-700">Hello World</div>
  );
}
