import React from "react";

import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import BlogDetails from "@/components/blog-details";
export const metadata: Metadata = {
  title: "Article | Elhassan Dahmouchi – Web Dev, AI & Tech Blog",
  description:
    "Read in-depth articles by Elhassan Dahmouchi covering full-stack development, AI integration, SaaS architecture, mobile development, and modern web technologies.",
};

export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
}
