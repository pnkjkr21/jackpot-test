import React, { useState, useRef, useEffect, memo } from 'react';
import styles from './checkbox-dropdown.module.css';
import FilterButton from '../FilterButton';

interface DropdownProps {
  filters: { id: string; title: string; }[];
  defaultFilters?: { id: string; title: string; }[];
  selectedFilters: string[];
  setSelectedFilters: (filters: string[] | ((prev: string[]) => string[])) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ filters, selectedFilters, setSelectedFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedFilters((prev: string[]) => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <FilterButton 
        text={`More Filters (${selectedFilters.length})`} 
        onClick={toggleDropdown}
        isActive={isOpen}
      />
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={styles.checkboxContainer}>
            {filters.map(({id, title}) => (
              <label key={id} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(id)}
                  onChange={() => handleCheckboxChange(id)}
                />
                {title}
              </label>
            ))}
          </div>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);

