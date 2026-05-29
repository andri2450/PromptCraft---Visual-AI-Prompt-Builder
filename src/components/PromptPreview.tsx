import { Clipboard, RotateCcw } from "lucide-react";

type Props = {
  prompt: string;
  copied: boolean;
  onCopy: () => void;
  onReset: () => void;
};

const PromptPreview = ({
  prompt,
  copied,
  onCopy,
  onReset
}: Props) => {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-5">
        Generated Prompt
      </h2>

      <textarea
        readOnly
        value={prompt}
        className="
          flex-1 min-h-[320px]
          bg-[#0c0f14]
          border border-border
          rounded-xl
          p-4
          text-gray-200
          resize-none
          outline-none
        "
      />

      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <button
          onClick={onCopy}
          className="
            flex items-center justify-center gap-2
            flex-1
            bg-gradient-to-r from-violet-600 to-blue-600
            hover:opacity-90
            transition
            px-5 py-4 rounded-xl font-semibold
          "
        >
          <Clipboard size={18} />
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>

        <button
          onClick={onReset}
          className="
            flex items-center justify-center gap-2
            border border-border
            hover:border-red-500
            hover:text-red-400
            transition
            px-5 py-4 rounded-xl font-semibold
          "
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default PromptPreview;
