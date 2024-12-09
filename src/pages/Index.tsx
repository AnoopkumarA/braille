import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, Type } from "lucide-react";
import { FileUploader } from "@/components/FileUploader";
import { BraillePreview } from "@/components/BraillePreview";
import { toast } from "sonner";

const Index = () => {
  const [text, setText] = useState("");
  const [showUploader, setShowUploader] = useState(false);

  const handleTranslate = () => {
    if (!text) {
      toast.error("Please enter some text to translate");
      return;
    }
    toast.success("Translation complete!");
  };

  const handleTextExtracted = (extractedText: string) => {
    setText(extractedText);
    setShowUploader(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Braille Translator</h1>
          <p className="text-lg text-gray-600">Convert text and documents to Braille instantly</p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex gap-4 mb-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowUploader(false)}
              >
                <Type className="mr-2 h-4 w-4" />
                Text Input
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowUploader(true)}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </Button>
            </div>

            {showUploader ? (
              <FileUploader onTextExtracted={handleTextExtracted} />
            ) : (
              <div className="space-y-4">
                <Textarea
                  placeholder="Enter text to translate to Braille..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button 
                  className="w-full"
                  onClick={handleTranslate}
                >
                  Translate to Braille
                </Button>
              </div>
            )}
          </Card>

          <BraillePreview text={text} />
        </div>
      </div>
    </div>
  );
};

export default Index;