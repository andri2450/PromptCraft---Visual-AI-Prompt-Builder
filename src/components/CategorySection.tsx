import OptionChip from "./OptionChip";

interface CategorySectionProps {
  title: string;
  options: string[];
  selected: string[];
  toggleOption: (value: string) => void;
}

const CategorySection = ({
  title,
  options,
  selected,
  toggleOption
}: CategorySectionProps) => {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-4 text-white">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {options.map((option: string) => (
          <OptionChip
            key={option}
            label={option}
            active={selected.includes(option)}
            onClick={() => toggleOption(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
