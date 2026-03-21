import { useState, useCallback } from "react";

export interface Project {
  id: string;
  name: string;
  genre: string;
  subGenre?: string;
  bpm: number;
  key: string;
  mood: string;
  status: "active" | "paused" | "completed";
  notes: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "prodly-projects";

function load(): Project[] {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch { return []; }
}

function save(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(load);

  const add = useCallback((p: Omit<Project, "id" | "createdAt" | "updatedAt" | "progress" | "notes" | "status">) => {
    const now = new Date().toISOString();
    const proj: Project = {
      ...p,
      id: crypto.randomUUID(),
      status: "active",
      notes: "",
      progress: 0,
      createdAt: now,
      updatedAt: now,
    };
    setProjects((prev) => {
      const next = [proj, ...prev];
      save(next);
      return next;
    });
    return proj;
  }, []);

  const update = useCallback((id: string, patch: Partial<Project>) => {
    setProjects((prev) => {
      const next = prev.map((p) =>
        p.id === id ? { ...p, ...patch, updatedAt: new Date().toISOString() } : p
      );
      save(next);
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setProjects((prev) => {
      const next = prev.filter((p) => p.id !== id);
      save(next);
      return next;
    });
  }, []);

  return { projects, add, update, remove };
}
