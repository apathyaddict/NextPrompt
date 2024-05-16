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
    // console.log(params.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  const query = searchParams?.get("query");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();

      if (!query) {
        setAllPosts(data);
      } else {
        const filteredPosts = data.filter((post) => {
          const promptIncludesQuery = post.prompt
            .toLowerCase()
            .includes(query.toLowerCase());
          const tagIncludesQuery = post.tag
            .toLowerCase()
            .includes(query.toLowerCase());
          const creatorIncludesQuery = post.creator.username
            .toLowerCase()
            .includes(query.toLowerCase());
          return (
            promptIncludesQuery || tagIncludesQuery || creatorIncludesQuery
          );
        });
        setAllPosts(filteredPosts);
      }
    };
    fetchPosts();
  }, [query]);

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
        handleTagClick={(clickedTag) => {
          const params = new URLSearchParams(searchParams);
          params.set("query", clickedTag);
          replace(`${pathname}?${params.toString()}`);
        }}
      />
    </section>
  );
};

export default Feed;
