"use client";

import {
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
} from "react-icons/hi";

import { Card } from "@heroui/react";
import FadeUp from "../FadeUp";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: HiOutlineDocumentText,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: HiOutlineUsers,
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: HiOutlineLightningBolt,
    },
    {
      title: "Jobs Closed",
      value: "32",
      icon: HiOutlineCheckCircle,
    },
  ];

  return (
    <FadeUp className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <Card
            key={index}
            className="border  border-dashed  hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-6 ">
              <div className="flex justify-center">
                <div className="h-12 w-12 flex items-center justify-center">
                  <Icon className="text-2xl text-default-600" />
                </div>
              </div>

              <p className="mt-5 text-sm text-default-500 flex text-center justify-center">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold flex text-center justify-center">
                {item.value}
              </h2>
            </div>
          </Card>
        );
      })}
    </FadeUp>
  );
}