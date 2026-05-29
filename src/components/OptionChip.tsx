type Props = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const OptionChip = ({ label, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
        ${
          active
            ? "bg-gradient-to-r from-violet-600 to-blue-600 border-transparent text-white shadow-lg shadow-violet-500/30 scale-105"
            : "bg-surface border-border text-gray-300 hover:border-violet-500 hover:text-white"
        }
      `}
    >
      {label}
    </button>
  );
};

export default OptionChip;
