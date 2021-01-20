import React from "react";
import useSWR from "swr";
import { TagsResponse } from "../models";

export default function Sidebar() {
  const { data, error } = useSWR<TagsResponse>(
    "https://conduit.productionready.io/api/tags"
  );

  if (!data) return <div className="sidebar">Loading tags...</div>;
  if (error) return <div className="sidebar">Failed to fetch tags</div>;
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {data.tags.map((tag) => (
          <a href="" className="tag-pill tag-default" key={tag}>
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
