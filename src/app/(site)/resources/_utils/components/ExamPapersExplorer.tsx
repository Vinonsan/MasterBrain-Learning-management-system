"use client";

import { useState } from "react";
import DownloadCard from "@/src/components/base/DownloadCard";
import Select from "@/src/components/base/Select";

type Medium = "English Medium" | "Tamil Medium";
type PaperCategory = "term" | "model" | "past";
type PaperKey =
  | "term-1"
  | "term-2"
  | "term-3"
  | "term-4"
  | "term-5"
  | "final-model"
  | "past-papers";

type PaperItem = {
  id: string;
  medium: Medium;
  paperKey: PaperKey;
  title: string;
  description: string;
  driveFileId?: string;
};

const mediumOptions = [
  { label: "English Medium", value: "English Medium" },
  { label: "Tamil Medium", value: "Tamil Medium" },
];

const categoryOptions = [
  { label: "Term Papers", value: "term" },
  { label: "Model Papers", value: "model" },
  { label: "Past Papers", value: "past" },
];

const paperOptionsByCategory: Record<PaperCategory, { label: string; value: PaperKey }[]> = {
  term: [
    { label: "Term 1", value: "term-1" },
    { label: "Term 2", value: "term-2" },
    { label: "Term 3", value: "term-3" },
    { label: "Term 4", value: "term-4" },
    { label: "Term 5", value: "term-5" },
  ],
  model: [{ label: "Final Model", value: "final-model" }],
  past: [{ label: "Past Papers", value: "past-papers" }],
};

const papers: PaperItem[] = [
  {
    id: "eng-term-1-2025",
    medium: "English Medium",
    paperKey: "term-1",
    title: "English Medium - Term 1 ICT",
    description: "Grade 12 Term 1 ICT paper pack with answer guide.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-term-2-2025",
    medium: "English Medium",
    paperKey: "term-2",
    title: "English Medium - Term 2 ICT",
    description: "Grade 12 Term 2 ICT paper with marking points.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-term-3-2025",
    medium: "English Medium",
    paperKey: "term-3",
    title: "English Medium - Term 3 ICT",
    description: "Grade 12 Term 3 ICT paper for revision.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-term-4-2025",
    medium: "English Medium",
    paperKey: "term-4",
    title: "English Medium - Term 4 ICT",
    description: "Grade 12 Term 4 ICT paper set.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-term-5-2025",
    medium: "English Medium",
    paperKey: "term-5",
    title: "English Medium - Term 5 ICT",
    description: "Grade 12 Term 5 ICT full paper.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-final-model-2025",
    medium: "English Medium",
    paperKey: "final-model",
    title: "English Medium - Final Model ICT",
    description: "A/L final model paper with exam-style timing.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-past-papers",
    medium: "English Medium",
    paperKey: "past-papers",
    title: "English Medium - A/L ICT Past Papers",
    description: "Selected past papers collection for A/L ICT.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-term-1-2025",
    medium: "Tamil Medium",
    paperKey: "term-1",
    title: "Tamil Medium - Term 1 ICT",
    description: "Grade 12 Term 1 ICT paper pack with answer guide.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-term-2-2025",
    medium: "Tamil Medium",
    paperKey: "term-2",
    title: "Tamil Medium - Term 2 ICT",
    description: "Grade 12 Term 2 ICT paper with marking points.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-term-3-2025",
    medium: "Tamil Medium",
    paperKey: "term-3",
    title: "Tamil Medium - Term 3 ICT",
    description: "Grade 12 Term 3 ICT paper for revision.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-term-4-2025",
    medium: "Tamil Medium",
    paperKey: "term-4",
    title: "Tamil Medium - Term 4 ICT",
    description: "Grade 12 Term 4 ICT paper set.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-term-5-2025",
    medium: "Tamil Medium",
    paperKey: "term-5",
    title: "Tamil Medium - Term 5 ICT",
    description: "Grade 12 Term 5 ICT full paper.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-final-model-2025",
    medium: "Tamil Medium",
    paperKey: "final-model",
    title: "Tamil Medium - Final Model ICT",
    description: "A/L final model paper with exam-style timing.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-past-papers",
    medium: "Tamil Medium",
    paperKey: "past-papers",
    title: "Tamil Medium - A/L ICT Past Papers",
    description: "Selected past papers collection for A/L ICT.",
    driveFileId: "1ABCDEF1234567890",
  },
];

export default function ExamPapersExplorer() {
  const [selectedMedium, setSelectedMedium] = useState<Medium>("English Medium");
  const [selectedCategory, setSelectedCategory] = useState<PaperCategory>("term");
  const [selectedPaper, setSelectedPaper] = useState<PaperKey>("term-1");

  const currentPaperOptions = paperOptionsByCategory[selectedCategory];

  const filteredPapers = papers.filter(
    (paper) => paper.medium === selectedMedium && paper.paperKey === selectedPaper
  );

  return (
    <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Select
            label="Medium"
            options={mediumOptions}
            labelKey="label"
            valueKey="value"
            value={selectedMedium}
            onChange={(value) => setSelectedMedium(value as Medium)}
          />

          <Select
            label="Category"
            options={categoryOptions}
            labelKey="label"
            valueKey="value"
            value={selectedCategory}
            onChange={(value) => {
              const nextCategory = value as PaperCategory;
              setSelectedCategory(nextCategory);
              setSelectedPaper(paperOptionsByCategory[nextCategory][0].value);
            }}
          />

          <Select
            label="Paper"
            options={currentPaperOptions}
            labelKey="label"
            valueKey="value"
            value={selectedPaper}
            onChange={(value) => setSelectedPaper(value as PaperKey)}
          />

        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        {filteredPapers.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-600">
            No papers found for this selection.
          </div>
        ) : (
          filteredPapers.map((paper, index) => (
            <DownloadCard
              key={paper.id}
              paperNumber={index + 1}
              title={paper.title}
              description={paper.description}
              driveFileId={paper.driveFileId}
            />
          ))
        )}
      </div>
    </section>
  );
}
