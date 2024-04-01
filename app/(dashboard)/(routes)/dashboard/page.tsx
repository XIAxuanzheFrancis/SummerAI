import Image from "next/image";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <>
      <p className="text-3xl text-blue-400">
        Welcome to Summer AI Dashboard(Protected)
      </p>
      <Button variant="destructive" size="lg">
        Click me
      </Button>
    </>
  );
};

export default DashboardPage;
