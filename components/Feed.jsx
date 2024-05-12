"use client";

import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import axios from "axios";

const Feed = ({ router }) => {
  const [posts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    router.push(`/api/prompt?search=${searchText}`);
  }, [searchText, router]);

  // const searchPrompts = async (searchText) => {
  //   try {
  //     const response = await axios.get(
  //       `api/prompt?search=${encodeURIComponent(searchText)}`
  //     );
  //     setSearchedResults(response.data);
  //     console.log(searchedResults);
  //     return searchedResults;
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data.error);
  //     }
  //   }
  // };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
        {/* <button onClick={searchPrompts}>Search</button> */}
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
