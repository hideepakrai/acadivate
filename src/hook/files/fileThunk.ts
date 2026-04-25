import { createAsyncThunk } from "@reduxjs/toolkit";
import { NominationFormType } from "../nominations/nominationType";
import { FileItem } from "./fileType";

export const fetchFilesByNominationIdThunk = createAsyncThunk<
  FileItem[],
  string,
  { rejectValue: string }
>("files/fetchByNominationId", async (nominationId, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/nominations?id=${encodeURIComponent(nominationId)}`);
    if (!response.ok) {
      throw new Error("Failed to fetch nomination details");
    }
    const data = await response.json();
    const nomination: NominationFormType = data.item;

    if (!nomination) {
      throw new Error("Nomination not found");
    }

    const files: FileItem[] = [];

    const nominationName = nomination.orgName || nomination.promoter || "Unnamed";

    const mapFiles = (urls: any, category: string) => {
      if (urls && Array.isArray(urls)) {
        urls.forEach((url: string) => {
          // Extract filename from URL (everything after the last slash)
          const fileName = url.split("/").pop() || "unknown-file";
          files.push({
            name: fileName,
            url,
            category,
            nominationName,
          });
        });
      }
    };

    mapFiles(nomination.researchPublication, "Research Publication");
    mapFiles(nomination.bookPublication, "Book Publication");
    mapFiles(nomination.researchProject, "Research Project");
    mapFiles(nomination.patentPolicyDocument, "Patent Policy Document");

    return files;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch files"
    );
  }
});

export const fetchAllFilesThunk = createAsyncThunk<
  FileItem[],
  void,
  { rejectValue: string }
>("files/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/nominations");
    if (!response.ok) {
      throw new Error("Failed to fetch nominations");
    }
    const data = await response.json();
    const nominations: NominationFormType[] = data.items || [];

    const allFiles: FileItem[] = [];

    const mapFiles = (urls: any, category: string, nominationName: string) => {
      if (urls && Array.isArray(urls)) {
        urls.forEach((url: string) => {
          const fileName = url.split("/").pop() || "unknown-file";
          allFiles.push({
            name: fileName,
            url,
            category,
            nominationName,
          });
        });
      }
    };

    nominations.forEach((nom) => {
      const name = nom.orgName || nom.promoter || "Unnamed";
      mapFiles(nom.researchPublication, "Research Publication", name);
      mapFiles(nom.bookPublication, "Book Publication", name);
      mapFiles(nom.researchProject, "Research Project", name);
      mapFiles(nom.patentPolicyDocument, "Patent Policy Document", name);
    });

    return allFiles;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch all files"
    );
  }
});
