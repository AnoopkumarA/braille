import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface FileUploaderProps {
  onTextExtracted: (text: string) => void;
}

export const FileUploader = ({ onTextExtracted }: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    if (files.length === 0) return;

    const file = files[0];
    
    if (file.type.includes('pdf')) {
      toast.info(
        "PDF support is coming soon!", 
        {
          description: "Currently, we only support .txt files. PDF processing will be available in our next update.",
          duration: 5000
        }
      );
      return;
    }

    if (!file.type.includes('text')) {
      toast.error("Please upload a text (.txt) file");
      return;
    }

    try {
      const text = await file.text();
      onTextExtracted(text);
      toast.success(`File "${file.name}" processed successfully`);
    } catch (error) {
      toast.error("Error processing file");
      console.error(error);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        isDragging ? "border-primary bg-blue-50" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium mb-2">Drag and drop your file here</h3>
      <p className="text-sm text-gray-500 mb-4">or</p>
      <Button variant="outline" onClick={() => document.getElementById("file-input")?.click()}>
        Browse Files
      </Button>
      <input
        id="file-input"
        type="file"
        className="hidden"
        onChange={handleFileInput}
        accept=".txt"
      />
      <p className="text-sm text-gray-500 mt-2">
        Currently supporting .txt files only
      </p>
    </div>
  );
};