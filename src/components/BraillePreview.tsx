import { Card } from "@/components/ui/card";
import { convertToBraille } from "@/utils/brailleConverter";

interface BraillePreviewProps {
  text: string;
}

export const BraillePreview = ({ text }: BraillePreviewProps) => {
  const brailleText = convertToBraille(text) || "⠃⠗⠁⠊⠇⠇⠑ ⠏⠗⠑⠧⠊⠑⠺...";

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Braille Preview</h2>
      <div className="bg-gray-50 p-4 rounded-lg min-h-[100px] font-mono">
        <p className="mb-2 text-gray-600 text-sm">Original Text:</p>
        <p className="mb-4">{text || "No text entered"}</p>
        <p className="mb-2 text-gray-600 text-sm">Braille:</p>
        <p className="text-2xl leading-loose">{brailleText}</p>
      </div>
    </Card>
  );
};