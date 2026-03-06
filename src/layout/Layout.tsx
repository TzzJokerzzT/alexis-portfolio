import { Footer, Header, PageBorder, Preloader, ScrollUp } from "./index";
import type { LayoutProps } from "./types";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Preloader />
      <PageBorder />
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <ScrollUp />
    </>
  );
}
