"use client";
import { Input } from "@/components/input";
import { Search } from "lucide-react";
import { debounce, parseAsString, useQueryState } from "nuqs";
import { ChangeEvent } from "react";

export function SearchInput() {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== '' ? debounce(500) : undefined,
    });
  }

  return (
    <div className="relative">
      <Search className="size-4 absolute text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />

      <Input
        type='text'
        placeholder="Seach for features..."
        className="w-67.5 pl-8"
        value={search}
        onChange={handleSearchUpdate}
      />
    </div>
  )
}