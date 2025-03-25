import React, { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
import styles from "./section-container.module.css";
import FilterButton from "@/components/FilterButton";
import {
  actionButtons,
  paramsForActionButtons,
  sections,
} from "@/utility/constants/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import InfiniteScrollPage from "@/components/InfiniteScrollPage";
import { isEmpty } from "lodash";
import { useSearchStore } from "@/store";
import SearchFilterComponent from "@/components/SearchFilterComponent";
const SectionsContainer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeParams, setActiveParams] = useState({});
  const category = searchParams.get("category");

  const { setSearchQuery, searchQuery } = useSearchStore();

  const updateUrl = (category: string) => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams);
    const oldValue = params.get("category");
    if (oldValue !== category) {
      params.delete("category");
      params.set("category", category);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(() => {
    if (category && category in paramsForActionButtons) {
      const params =
        paramsForActionButtons[category as keyof typeof paramsForActionButtons];
      setActiveParams(params);
    }
  }, [category]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveParams({});
    router.push(`${pathname}`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.filterButtonsContainer}>
          {actionButtons.map((button) => (
            <FilterButton
              key={button.id}
              text={button.title}
              onClick={() => updateUrl(button.id)}
              isActive={category === button.id}
            />
          ))}
        </div>
        <div>
          <FilterButton text="Clear Filters" onClick={clearFilters} />
        </div>
      </div>
      {!isEmpty(searchQuery) ? (
        <SearchFilterComponent />
      ) : isEmpty(activeParams) ? (
        <div className={styles.container}>
          {sections.map((section) => (
            <Carousel
              key={section.id}
              title={section.title}
              params={section.params}
              Icon={section.Icon}
            />
          ))}
        </div>
      ) : (
        <>
          <InfiniteScrollPage params={activeParams} />
        </>
      )}
    </>
  );
};

export default SectionsContainer;
