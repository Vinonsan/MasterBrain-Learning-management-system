"use client";

import { useState } from "react";
import DownloadCard from "@/src/components/base/DownloadCard";
import Select from "@/src/components/base/Select";

type Medium = "English Medium" | "Tamil Medium";
type NoteCategory = "theory" | "revision" | "unit";
type NoteKey =
  | "ict-fundamentals"
  | "data-communication"
  | "database"
  | "programming"
  | "web-development";

type NoteItem = {
  id: string;
  medium: Medium;
  category: NoteCategory;
  noteKey: NoteKey;
  title: string;
  description: string;
  driveFileId?: string;
};

const mediumOptions = [
  { label: "English Medium", value: "English Medium" },
  { label: "Tamil Medium", value: "Tamil Medium" },
];

const categoryOptions = [
  { label: "Theory Notes", value: "theory" },
  { label: "Revision Notes", value: "revision" },
  { label: "Unit Notes", value: "unit" },
];

const noteOptionsByCategory: Record<NoteCategory, { label: string; value: NoteKey }[]> = {
  theory: [
    { label: "ICT Fundamentals", value: "ict-fundamentals" },
    { label: "Data Communication", value: "data-communication" },
    { label: "Database", value: "database" },
  ],
  revision: [
    { label: "Programming", value: "programming" },
    { label: "Web Development", value: "web-development" },
  ],
  unit: [
    { label: "ICT Fundamentals", value: "ict-fundamentals" },
    { label: "Programming", value: "programming" },
  ],
};

const notes: NoteItem[] = [
  {
    id: "eng-theory-ict-fundamentals",
    medium: "English Medium",
    category: "theory",
    noteKey: "ict-fundamentals",
    title: "English Medium - ICT Fundamentals",
    description: "Core theory notes for ICT basics and digital systems.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-theory-data-communication",
    medium: "English Medium",
    category: "theory",
    noteKey: "data-communication",
    title: "English Medium - Data Communication",
    description: "Network models, transmission, and communication concepts.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-theory-database",
    medium: "English Medium",
    category: "theory",
    noteKey: "database",
    title: "English Medium - Database",
    description: "DBMS, ER models, normalization, and SQL fundamentals.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-revision-programming",
    medium: "English Medium",
    category: "revision",
    noteKey: "programming",
    title: "English Medium - Programming Revision",
    description: "Quick revision sheet for algorithms and programming logic.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-revision-web-development",
    medium: "English Medium",
    category: "revision",
    noteKey: "web-development",
    title: "English Medium - Web Development Revision",
    description: "Revision notes for HTML, CSS, and client-side concepts.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-unit-ict-fundamentals",
    medium: "English Medium",
    category: "unit",
    noteKey: "ict-fundamentals",
    title: "English Medium - Unit Notes: ICT Fundamentals",
    description: "Unit-wise learning notes with key definitions and examples.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "eng-unit-programming",
    medium: "English Medium",
    category: "unit",
    noteKey: "programming",
    title: "English Medium - Unit Notes: Programming",
    description: "Unit notes on control structures, arrays, and functions.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-theory-ict-fundamentals",
    medium: "Tamil Medium",
    category: "theory",
    noteKey: "ict-fundamentals",
    title: "Tamil Medium - ICT Fundamentals",
    description: "Core theory notes for ICT basics and digital systems.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-theory-data-communication",
    medium: "Tamil Medium",
    category: "theory",
    noteKey: "data-communication",
    title: "Tamil Medium - Data Communication",
    description: "Network models, transmission, and communication concepts.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-theory-database",
    medium: "Tamil Medium",
    category: "theory",
    noteKey: "database",
    title: "Tamil Medium - Database",
    description: "DBMS, ER models, normalization, and SQL fundamentals.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-revision-programming",
    medium: "Tamil Medium",
    category: "revision",
    noteKey: "programming",
    title: "Tamil Medium - Programming Revision",
    description: "Quick revision sheet for algorithms and programming logic.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-revision-web-development",
    medium: "Tamil Medium",
    category: "revision",
    noteKey: "web-development",
    title: "Tamil Medium - Web Development Revision",
    description: "Revision notes for HTML, CSS, and client-side concepts.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-unit-ict-fundamentals",
    medium: "Tamil Medium",
    category: "unit",
    noteKey: "ict-fundamentals",
    title: "Tamil Medium - Unit Notes: ICT Fundamentals",
    description: "Unit-wise learning notes with key definitions and examples.",
    driveFileId: "1ABCDEF1234567890",
  },
  {
    id: "tam-unit-programming",
    medium: "Tamil Medium",
    category: "unit",
    noteKey: "programming",
    title: "Tamil Medium - Unit Notes: Programming",
    description: "Unit notes on control structures, arrays, and functions.",
    driveFileId: "1ABCDEF1234567890",
  },
];

const ALNotesExplorer = () => {
  const [selectedMedium, setSelectedMedium] = useState<Medium>("English Medium");
  const [selectedCategory, setSelectedCategory] = useState<NoteCategory>("theory");
  const [selectedNote, setSelectedNote] = useState<NoteKey>("ict-fundamentals");

  const currentNoteOptions = noteOptionsByCategory[selectedCategory];

  const filteredNotes = notes.filter(
    (note) =>
      note.medium === selectedMedium &&
      note.category === selectedCategory &&
      note.noteKey === selectedNote
  );

  return (
    <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
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
          label="Notes Type"
          options={categoryOptions}
          labelKey="label"
          valueKey="value"
          value={selectedCategory}
          onChange={(value) => {
            const nextCategory = value as NoteCategory;
            setSelectedCategory(nextCategory);
            setSelectedNote(noteOptionsByCategory[nextCategory][0].value);
          }}
        />

        <Select
          label="Topic"
          options={currentNoteOptions}
          labelKey="label"
          valueKey="value"
          value={selectedNote}
          onChange={(value) => setSelectedNote(value as NoteKey)}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        {filteredNotes.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-600">
            No notes found for this selection.
          </div>
        ) : (
          filteredNotes.map((note, index) => (
            <DownloadCard
              key={note.id}
              paperNumber={index + 1}
              title={note.title}
              description={note.description}
              driveFileId={note.driveFileId}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ALNotesExplorer;
