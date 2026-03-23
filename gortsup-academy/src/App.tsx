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
  ScenarioComparison,
  CareerMap,
  DayInLife,
  Program,
  BenefitCalculator,
  Pricing,
  Footer
} from "./components/GortsupComponents";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MediaMentions />
        <VideoGallery />
        <SuccessStories />
        <Reviews />
        <Stats />
        <PainPoints />
        <Comparison />
        <ScenarioComparison />
        <BenefitCalculator />
        <CareerMap />
        <DayInLife />
        <Program />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
