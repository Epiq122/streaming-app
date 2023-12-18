import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { Container } from "./_components/container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex  h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
}
