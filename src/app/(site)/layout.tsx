import Footer from "@/src/components/layouts/Footer";
import Nav from "@/src/components/layouts/Nav";
import React from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Nav />
        <div className="pt-24">
        {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
