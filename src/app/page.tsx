import { Metadata } from "next";
import HomeFourPage from "./(homes)/home-4/page";

export const metadata: Metadata = {
  title: "Vyox AI - AI Automation Agency",
};

export default function Home() {
  return (
    <>
      <HomeFourPage />
    </>
  );
}