import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p className="text-3xl text-blue-400">
        Welcome to Summer AI Dashboard(Protected)
      </p>
      <Button variant="destructive" size="lg">
        Click me
      </Button>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default DashboardPage;
