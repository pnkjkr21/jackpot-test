import React, { useCallback, useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
import styles from "./section-container.module.css";
import FilterButton from "@/components/FilterButton";
import {
  ACTION_BUTTONS,
  PARAMS_FOR_ACTION_BUTTONS,
  SECTIONS,
  VENDORS,
} from "@/utility/constants/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import InfiniteScrollPage from "@/components/InfiniteScrollPage";
import { isEmpty } from "lodash";
import { useSearchStore } from "@/store";
import SearchFilterComponent from "@/components/SearchFilterComponent";
import Dropdown from "@/components/CheckboxDropdownFilter";
import StarredGames from "@/components/StarredGames";

const SectionsContainer = ({ starredGames, setStarredGames }: { starredGames: boolean, setStarredGames: (starredGames: boolean) => void }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeParams, setActiveParams] = useState({});
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const category = searchParams.get("category");

  const { setSearchQuery, searchQuery } = useSearchStore();

  const updateUrl = useCallback(({ category, vendor = [] }: { category?: string; vendor?: string[] }) => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams);
    
    const updateCategory = () => {
      if (!category) return;
      const oldValue = params.get("category");
      if (oldValue === category) return;
      params.delete("category");
      params.set("category", category);
      router.push(`${pathname}?${params.toString()}`);
    };

    const updateVendor = () => {
      if (isEmpty(vendor)) {
        params.delete("vendor");
      } else {
        params.set("vendor", vendor.join(","));
      }
      router.push(`${pathname}?${params.toString()}`);
    };

    updateCategory();
    updateVendor();
  }, [searchParams, pathname]);

  useEffect(() => {
    const category = searchParams.get("category");
    const vendor = searchParams.get("vendor");
    
    const params = category && category in PARAMS_FOR_ACTION_BUTTONS
      ? PARAMS_FOR_ACTION_BUTTONS[category as keyof typeof PARAMS_FOR_ACTION_BUTTONS]
      : {};
    setActiveParams(params);

    const vendorIds = vendor
      ? VENDORS.filter(v => vendor.split(",").includes(v.id)).map(v => v.id)
      : [];
    setSelectedVendors(vendorIds);
  }, [pathname, searchParams]);

  useEffect(() => {
    updateUrl({ vendor: selectedVendors });
  }, [selectedVendors, searchParams]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveParams({});
    router.push(`${pathname}`);
  };

  const onFilterClick = (id: string) => {
    setStarredGames(false);
    updateUrl({ category: id, vendor: selectedVendors });
  };

  const onStarredGamesClick = () => setStarredGames(!starredGames);

  const renderContent = () => {
    // first priority is favorite games if it is true then show favorite games otherwise search query component
    if (!isEmpty(searchQuery) && !starredGames) {
      return <SearchFilterComponent />;
    }

    if (starredGames) {
      return <StarredGames />;
    }
    // if everything is empty then we show the first page
    if (isEmpty(activeParams) && isEmpty(selectedVendors)) {
      return (
        <div className={styles.container}>
          {SECTIONS.map((section) => (
            <Carousel
              key={section.id}
              title={section.title}
              params={section.params}
              Icon={section.Icon}
              id={section.id}
            />
          ))}
        </div>
      );
    }
    // if someone clicked on category tags then it will set that params and show cards of that category
    // if additional vendors checklist is checked then it will fetch cards of those vendors and the chosen category
    return (
      <InfiniteScrollPage
        params={{
          ...activeParams,
          vendor: !isEmpty(activeParams?.vendor)
            ? [...selectedVendors, activeParams.vendor]
            : selectedVendors,
        }}
      />
    );
  };

  return (
    <>
      <div className={styles.actionItemContainer}>
        <div className={styles.filterButtonsContainer}>
          {ACTION_BUTTONS.map((button) => (
            <FilterButton
              key={button.id}
              text={button.title}
              onClick={() => onFilterClick(button.id)}
              isActive={category === button.id && !starredGames}
            />
          ))}
          <FilterButton 
            text="Starred Games" 
            onClick={onStarredGamesClick} 
            isActive={starredGames} 
          />
        </div>
        <div className={styles.dropdownContainer}>
          <Dropdown
            filters={VENDORS}
            selectedFilters={selectedVendors}
            setSelectedFilters={setSelectedVendors}
          />
          <FilterButton text="Clear Filters" onClick={clearFilters} />
        </div>
      </div>
      {renderContent()}
    </>
  );
};

export default SectionsContainer;
