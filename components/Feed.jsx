"use client";

import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";

const Feed = ({ router }) => {
  const [posts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const PromptCardList = ({ data, handleTagClick, searchParams }) => {
    console.log("prompt card list", searchParams.toString());

    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            searchParams={searchParams}
          />
        ))}
      </div>
    );
  };

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log("Updated searchParams:", params.toString());
    console.log(typeof searchParams.query, searchParams.query);
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();

      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={posts}
        searchParams={searchParams}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;
