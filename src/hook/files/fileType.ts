export interface FileItem {
  name: string;
  url: string;
  category: string; // e.g. "Research Publication", "Book Publication", etc.
  nominationName: string; // Respective nomination name
}

export interface FilesState {
  items: FileItem[];
  loading: boolean;
  error: string | null;
}
