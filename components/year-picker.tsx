"use client";

interface YearPickerOption {
  value: string;
  label: string;
}

interface YearPickerProps {
  value: string;
  options: YearPickerOption[];
  onChange: (value: string) => void;
  id?: string;
  ariaLabel?: string;
}

export function YearPicker({
  value,
  options,
  onChange,
  id = "year-picker",
  ariaLabel = "Select year",
}: YearPickerProps) {
  return (
    <div className="border-b bg-[hsl(0_0%_92%)] px-4 py-3 dark:bg-[hsl(0_0%_8%)]">
      <label htmlFor={id} className="sr-only">
        {ariaLabel}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-base font-medium text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
