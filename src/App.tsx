import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";

import CategorySection from "./components/CategorySection";
import PromptPreview from "./components/PromptPreview";
import { promptOptions } from "./data/promptOptions";

const App = () => {
  const [subject, setSubject] = useState<string>("");

  const [selectedCamera, setSelectedCamera] = useState<string[]>([]);
  const [selectedLighting, setSelectedLighting] = useState<string[]>([]);
  const [selectedQuality, setSelectedQuality] = useState<string[]>([]);
  const [selectedArchitecture, setSelectedArchitecture] = useState<string[]>([]);
  const [selectedEffects, setSelectedEffects] = useState<string[]>([]);

  const [copied, setCopied] = useState<boolean>(false);

  const toggleSelection = (
    value: string,
    current: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const generatedPrompt = useMemo(() => {
    return [
      subject,
      ...selectedCamera,
      ...selectedLighting,
      ...selectedArchitecture,
      ...selectedQuality,
      ...selectedEffects
    ]
      .filter(Boolean)
      .join(", ");
  }, [
    subject,
    selectedCamera,
    selectedLighting,
    selectedArchitecture,
    selectedQuality,
    selectedEffects
  ]);

  const handleCopy = async () => {
    if (!generatedPrompt) return;

    await navigator.clipboard.writeText(generatedPrompt);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleReset = () => {
    setSubject("");
    setSelectedCamera([]);
    setSelectedLighting([]);
    setSelectedQuality([]);
    setSelectedArchitecture([]);
    setSelectedEffects([]);
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-3 rounded-xl">
              <Sparkles size={24} />
            </div>

            <div>
              <h1 className="text-4xl font-black">
                PromptCraft
              </h1>

              <p className="text-gray-400">
                Visual AI Prompt Builder
              </p>
            </div>
          </div>

          <p className="text-gray-400 max-w-2xl">
            Build cinematic AI prompts for Midjourney,
            Stable Diffusion, Leonardo AI, and other
            generative image tools.
          </p>
        </div>

        <div className="mb-8">
          <label className="block mb-3 font-semibold text-lg">
            Main Subject
          </label>

          <input
            type="text"
            placeholder="Example: A futuristic sports car"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="
              w-full
              bg-surface
              border border-border
              rounded-2xl
              px-5 py-4
              outline-none
              focus:border-violet-500
              transition
            "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CategorySection
              title="Lens & Camera"
              options={promptOptions.camera}
              selected={selectedCamera}
              toggleOption={(value: string) =>
                toggleSelection(
                  value,
                  selectedCamera,
                  setSelectedCamera
                )
              }
            />

            <CategorySection
              title="Lighting Style"
              options={promptOptions.lighting}
              selected={selectedLighting}
              toggleOption={(value: string) =>
                toggleSelection(
                  value,
                  selectedLighting,
                  setSelectedLighting
                )
              }
            />

            <CategorySection
              title="Resolution & Quality"
              options={promptOptions.quality}
              selected={selectedQuality}
              toggleOption={(value: string) =>
                toggleSelection(
                  value,
                  selectedQuality,
                  setSelectedQuality
                )
              }
            />

            <CategorySection
              title="Architecture / Design"
              options={promptOptions.architecture}
              selected={selectedArchitecture}
              toggleOption={(value: string) =>
                toggleSelection(
                  value,
                  selectedArchitecture,
                  setSelectedArchitecture
                )
              }
            />

            <CategorySection
              title="Additional Visual Effects"
              options={promptOptions.effects}
              selected={selectedEffects}
              toggleOption={(value: string) =>
                toggleSelection(
                  value,
                  selectedEffects,
                  setSelectedEffects
                )
              }
            />
          </div>

          <div>
            <div className="sticky top-6">
              <PromptPreview
                prompt={generatedPrompt}
                copied={copied}
                onCopy={handleCopy}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
