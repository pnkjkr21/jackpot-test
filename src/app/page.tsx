'use client'

import SearchBar from "@/components/search-bar";
import SectionsContainer from "./components/SectionsContainer";
import { useSearchStore } from "@/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


export default function Home() {

  const {searchQuery, setSearchQuery} = useSearchStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [starredGames, setStarredGames] = useState(false);
  
  const deletePathParams = () => {
    const params = new URLSearchParams(searchParams);
    const category = params.get("category");
    if (category) {
      router.push(`${pathname}`)
    }
  }
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    deletePathParams();
    setStarredGames(false);
  }
  
  return (
    <div className="content-container">
      <SearchBar placeholder="Search a game.." value={searchQuery} onChange={handleSearch} />
      <SectionsContainer starredGames={starredGames} setStarredGames={setStarredGames} />
    </div>
  );
}
