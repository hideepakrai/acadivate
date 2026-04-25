/**
 * Utility function to trigger a browser download for a file URL.
 * @param url The URL of the file to download
 * @param fileName The name to save the file as
 */
/**
 * Utility function to trigger a browser download for a file URL.
 * Uses fetch to get the file as a blob, ensuring the "download" behavior
 * even for files the browser might otherwise open in a new tab (like PDFs).
 * @param url The URL of the file to download
 * @param fileName The name to save the file as
 */
export const downloadFile = async (url: string, fileName: string) => {
  if (!url) return;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);
    // Fallback: try opening in a new tab
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("target", "_blank");
    link.click();
  }
};

/**
 * Utility function to get a clean filename from a path or URL
 * @param path The path or URL
 */
export const getFileName = (path: string) => {
  return path.split("/").pop() || "download";
};
