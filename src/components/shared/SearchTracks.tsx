"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { DebounceInput as Input } from "react-debounce-input";

const SearchTracks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasFocusInput, setHasFocusInput] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  useEffect(() => {
    if (hasFocusInput) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push("/search");
      }
    }
  }, [searchQuery]);

  return (
    <>
      <Input
        minLength={2}
        debounceTimeout={300}
        type="text"
        placeholder="Что хочешь включить?"
        value={searchQuery}
        onChange={handleSubmit}
        onFocus={() => {
          setHasFocusInput(true);
          router.push("/search");
        }}
      />
    </>
  );
};

export default SearchTracks;
