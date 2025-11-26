import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { ArrowUpIcon } from '../../atoms/Icons/ArrowUpIcon';
import { ArrowDownIcon } from '../../atoms/Icons/ArrowDownIcon';

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
  const selected = currentValue || label;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    onChange?.(value);
  };

  return (
    <div className="relative inline-block">
      {description && (
        <label className="block text-sm text-secondary mb-1">
          {description}
        </label>
      )}

      <Select.Root
        value={selected}
        onValueChange={handleSelect}
        onOpenChange={setIsOpen}
      >
        <Select.Trigger
          className={`w-[136px] h-10 p-2 pb-1 md:p-4 md:pb-4 bg-white-2 border border-icon rounded-none text-left text-[12px] md:text-[14px] flex items-center justify-between 
            hover:border-secondary transition-colors data-[state=open]:border-primary outline-none ${className}`}
        >
          <Select.Value placeholder={label}>
            <span className="text-primary transition-colors duration-300">
              {selected}
            </span>
          </Select.Value>
          <Select.Icon>
            {isOpen ?
              <ArrowUpIcon />
            : <ArrowDownIcon />}
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
                  className={`px-4 py-3 cursor-pointer text-secondary hover:text-primary hover:bg-hover-bg-2 transition-colors duration-300 outline-none ${
                    index !== items.length - 1 ? 'border-b border-element' : ''
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
