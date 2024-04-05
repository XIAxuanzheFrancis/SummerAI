"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { VideoIcon } from "lucide-react";
import { Music } from "lucide-react";
import { Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/conversation",
  },
  {
    label: "Image Gerneration",
    icon: ImageIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/imageGerneration",
  },
  {
    label: "Video Gerneration",
    icon: VideoIcon,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/videoGerneration",
  },
  {
    label: "Music Gerneration",
    icon: Music,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    href: "/musicGerneration",
  },
  {
    label: "Code Gerneration",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/codeGerneration",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          SummerAI: How can I help you today?
        </h2>
        <p className="text-center text-gray-500 font-light text-sm md:text-lg">
          I am here to assist you with your AI needs. Just ask me anything!
        </p>
      </div>

      <div className="px-4 md-px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => {
            router.push(tool.href);
            }}
            key={tool.href}
            className="p-4 border-black/10 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold text-sm">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-6 h-6"/>
          </Card>
        ))}
      </div>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </>
  );
};

export default DashboardPage;
