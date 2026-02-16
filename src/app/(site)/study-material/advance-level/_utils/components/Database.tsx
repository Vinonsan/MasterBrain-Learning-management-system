"use client";

import { useState } from "react";
import DownloadCard from "@/src/components/base/DownloadCard";
import Button from "@/src/components/base/Button";

type MaterialType = "notes" | "examPapers" | "tutes";

type MaterialItem = {
  id: string;
  title: string;
  driveFileId: string;
};

type Topic = {
  id: string;
  title: string;
  materials: Record<MaterialType, MaterialItem[]>;
};

const materialTabs: { id: MaterialType; label: string }[] = [
  { id: "notes", label: "Notes" },
  { id: "examPapers", label: "Exam Papers" },
  { id: "tutes", label: "Tutorials" },
];

const topics: Topic[] = [
  {
    id: "database",
    title: "Database Management",
    materials: {
      notes: [
        { id: "db-1", title: "Introduction to Databases", driveFileId: "1AAA111_DATABASE_CH1" },
        { id: "db-2", title: "Data Models", driveFileId: "1AAA222_DATABASE_CH2" },
        { id: "db-3", title: "SQL Basics", driveFileId: "1AAA333_DATABASE_CH3" },
        { id: "db-4", title: "Advanced Queries", driveFileId: "1AAA444_DATABASE_CH4" },
        { id: "db-5", title: "Normalization", driveFileId: "1AAA555_DATABASE_CH5" },
      ],
      examPapers: [
        { id: "db-ep-1", title: "Database - Past Paper 2023", driveFileId: "1AAA777_DATABASE_EP1" },
        { id: "db-ep-2", title: "Database - Past Paper 2024", driveFileId: "1AAA888_DATABASE_EP2" },
      ],
      tutes: [
        { id: "db-tu-1", title: "Database Revision Tute 01", driveFileId: "1AAA999_DATABASE_TUTE1" },
        { id: "db-tu-2", title: "SQL Practical Tute 02", driveFileId: "1AAA000_DATABASE_TUTE2" },
      ],
    },
  },
  {
    id: "programming",
    title: "Programming Fundamentals",
    materials: {
      notes: [
        { id: "pr-1", title: "Introduction to Programming", driveFileId: "1BBB111_PROG_CH1" },
        { id: "pr-2", title: "Variables & Data Types", driveFileId: "1BBB222_PROG_CH2" },
        { id: "pr-3", title: "Control Structures", driveFileId: "1BBB333_PROG_CH3" },
        { id: "pr-4", title: "Functions", driveFileId: "1BBB444_PROG_CH4" },
        { id: "pr-5", title: "Arrays & Strings", driveFileId: "1BBB555_PROG_CH5" },
      ],
      examPapers: [
        { id: "pr-ep-1", title: "Programming - Past Paper 2023", driveFileId: "1BBB777_PROG_EP1" },
        { id: "pr-ep-2", title: "Programming - Past Paper 2024", driveFileId: "1BBB888_PROG_EP2" },
      ],
      tutes: [
        { id: "pr-tu-1", title: "Programming Revision Tute 01", driveFileId: "1BBB999_PROG_TUTE1" },
        { id: "pr-tu-2", title: "Problem Solving Tute 02", driveFileId: "1BBB000_PROG_TUTE2" },
      ],
    },
  },
  {
    id: "networks",
    title: "Data Communication & Networking",
    materials: {
      notes: [
        { id: "nw-1", title: "Basics of Networking", driveFileId: "1CCC111_NET_CH1" },
        { id: "nw-2", title: "Transmission Media", driveFileId: "1CCC222_NET_CH2" },
        { id: "nw-3", title: "Network Devices", driveFileId: "1CCC333_NET_CH3" },
        { id: "nw-4", title: "OSI Model", driveFileId: "1CCC444_NET_CH4" },
        { id: "nw-5", title: "TCP/IP", driveFileId: "1CCC555_NET_CH5" },
      ],
      examPapers: [
        { id: "nw-ep-1", title: "Networking - Past Paper 2023", driveFileId: "1CCC777_NET_EP1" },
        { id: "nw-ep-2", title: "Networking - Past Paper 2024", driveFileId: "1CCC888_NET_EP2" },
      ],
      tutes: [
        { id: "nw-tu-1", title: "Networking Revision Tute 01", driveFileId: "1CCC999_NET_TUTE1" },
        { id: "nw-tu-2", title: "Network Security Tute 02", driveFileId: "1CCC000_NET_TUTE2" },
      ],
    },
  },
];

export default function MaterialsSection() {
  const [activeTopic, setActiveTopic] = useState<Topic>(topics[0]);
  const [activeMaterial, setActiveMaterial] =
    useState<MaterialType>("notes");

  const activeItems = activeTopic.materials[activeMaterial];

  return (
    <section className="py-12">
      <div className="container mx-auto space-y-10">

        <div className="flex gap-12 w-full">
      
          <Button variant="secondary" className="rounded-2xl" size="lg">
            <a href="https://drive.google.com/drive/folders/1AAA111_DATABASE_CH1?usp=sharing" target="_blank" rel="noopener noreferrer">
              Back
            </a>
          </Button>
      
          <div className="flex justify-center w-full">
            <div className="flex gap-3 rounded-2xl border border-black/10 p-2 shadow-sm w-full">
              {materialTabs.map((tab) => {
                const isActive = activeMaterial === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMaterial(tab.id)}
                    className={`rounded-xl px-6 py-2 text-sm font-semibold transition ${isActive
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>


        <div className="grid gap-8 lg:grid-cols-12">

          <div className="space-y-3 lg:col-span-4">
            {topics.map((topic, index) => {
              const isActive = activeTopic.id === topic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition ${isActive
                      ? "border-black bg-black text-white"
                      : "bg-white hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl font-bold ${isActive ? "text-white" : "text-gray-300"
                        }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-semibold">
                      {topic.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE FILES */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">
                {activeTopic.title}
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {activeItems.map((item) => (
                  <DownloadCard
                    key={item.id}
                    title={item.title}
                    description={`${activeTopic.title}`}
                    driveFileId={item.driveFileId}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
