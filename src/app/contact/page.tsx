import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Elhassan Dahmouchi – Let's Work Together",
  description:
    "Get in touch with Elhassan Dahmouchi, a Morocco-based full-stack developer available for freelance projects. Whether you need a SaaS platform, web app, or mobile solution — let's connect.",
};

export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
}
