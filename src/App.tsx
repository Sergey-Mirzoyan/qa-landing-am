/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Navbar,
  Hero,
  SuccessStories,
  MediaMentions,
  VideoGallery,
  Reviews,
  Stats,
  PainPoints,
  Comparison,
  CareerMap,
  Program,
  BenefitCalculator,
  Pricing,
  Footer,
  Partners
} from "./components/GortsupComponents";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <MediaMentions />
        <VideoGallery />
        <SuccessStories />
        <Reviews />
        <Stats />
        <PainPoints />
        <Comparison />
        <BenefitCalculator />
        <CareerMap />
        <Program />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
