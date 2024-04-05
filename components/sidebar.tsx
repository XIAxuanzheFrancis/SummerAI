"use client";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import {cn} from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { VideoIcon } from "lucide-react";
import { Music } from "lucide-react";
import { Code } from "lucide-react";
import { Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });


const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-yellow-500"
    },
    {
        label: "Image Gerneration",
        icon: ImageIcon,
        href: "/imageGerneration",
        color: "text-green-500"
    },
    {
        label: "Video Gerneration",
        icon: VideoIcon,
        href: "/videoGerneration",
        color: "text-red-500"
    },
    {
        label: "Music Gerneration",
        icon: Music,
        href: "/musicGerneration",
        color: "text-purple-500"
    },
    {
        label: "Code Gerneration",
        icon: Code,
        href: "/codeGerneration",
        color: "text-blue-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    }
]
const SideBar = () => {
  const pathname = usePathname();

  return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-4 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-12">
                    <div className="relative w-10 h-10 mr-4 ml-0">
                        <Image fill alt="Logo" src="/logo.png" />
                    </div>
                        <h1 className={cn("text-2xl font-bold", montserrat.className)}>Summer AI</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href} className={cn("text-sm group flex p-5 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",pathname===route.href ? "text-white bg-white/10" : "text-zinc-200")}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("w-6 h-6 mr-4", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

  );
};

export default SideBar;
