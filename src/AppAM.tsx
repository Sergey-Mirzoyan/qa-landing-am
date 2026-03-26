/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  NavbarAM,
  HeroAM,
  SuccessStoriesAM,
  MediaMentionsAM,
  VideoGalleryAM,
  ReviewsAM,
  StatsAM,
  PainPointsAM,
  ComparisonAM,
  CareerMapAM,
  ProgramAM,
  BenefitCalculatorAM,
  PricingAM,
  FooterAM
} from "./components/ArmenianVersion/GortsupComponentsAM";

export default function AppAM() {
  return (
    <div className="min-h-screen">
      <NavbarAM />
      <main>
        <HeroAM />
        <MediaMentionsAM />
        <VideoGalleryAM />
        <SuccessStoriesAM />
        <ReviewsAM />
        <StatsAM />
        <PainPointsAM />
        <ComparisonAM />
        <BenefitCalculatorAM />
        <CareerMapAM />
        <ProgramAM />
        <PricingAM />
      </main>
      <FooterAM />
    </div>
  );
}
