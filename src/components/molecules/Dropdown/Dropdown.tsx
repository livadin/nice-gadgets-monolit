import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ArrowUpIcon } from "../../atoms/Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../../atoms/Icons/ArrowDownIcon";

type DropdownProps = {
  className: string;
  label: string;
  description?: string;
  items: string[];
  currentValue?: string;
  onChange?: (value: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  label,
  description,
  items,
  currentValue,
  onChange,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(currentValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (newValue: string) => {
    setSelectedItem(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="relative inline-block">
      {description && (
        <label className="block text-sm text-secondary mb-1">{description}</label>
      )}

      <Select.Root
        value={selectedItem}
        onValueChange={handleChange}
        onOpenChange={setIsOpen}
      >
        <Select.Trigger
          className={`w-[136px] h-10 px-4 py-3 bg-white border border-icon rounded-none text-left flex items-center justify-between 
            hover:border-secondary transition-colors data-[state=open]:border-primary outline-none ${className}`}
        >
          <Select.Value placeholder={label}>
            <span>{selectedItem}</span>
          </Select.Value>
          <Select.Icon>
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="w-[136px] bg-white border border-element rounded-none shadow-lg overflow-hidden z-50"
            position="popper"
            sideOffset={4}
          >
            <Select.Viewport>
              {items.map((item, index) => (
                <Select.Item
                  key={index}
                  value={item}
                  className={`px-4 py-3 cursor-pointer transition-colors text-secondary hover:text-primary hover:bg-hover-bg  outline-none ${
                    index !== items.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <Select.ItemText>{item}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};