import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import BlogDetailsArea from "./BlogDetailsArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

export default function BlogDetails() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Building Scalable SaaS Platforms with Next.js & Prisma" />
            <BlogDetailsArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
}
