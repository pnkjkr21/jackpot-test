'use client'

import SearchBar from "@/components/search-bar";
import SectionsContainer from "./components/SectionsContainer";
import { useSearchStore } from "@/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function Home() {

  const {searchQuery, setSearchQuery} = useSearchStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
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
  }
  
  return (
    <div>
      <SearchBar placeholder="Search a game.." value={searchQuery} onChange={handleSearch} />
      <SectionsContainer />
    </div>
  );
}
