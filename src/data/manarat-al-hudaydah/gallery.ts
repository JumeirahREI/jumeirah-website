import type { ProjectData } from "@/data/types";

import apartment1Image1 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/1.webp";
import apartment1Image2 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/2.webp";
import apartment1Image3 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/3.webp";
import apartment1Image3DayLightmix from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/3-day-lightmix.webp";
import apartment1Image4DayLightmix from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/4-day-lightmix.webp";
import apartment1Image5 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/5.webp";
import apartment1Image6 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/6.webp";
import apartment1Image6DayLightmix from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/6-day-lightmix.webp";
import apartment1Image6NightLightmix from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/6-night-lightmix.webp";
import apartment1Image7 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/7.webp";
import apartment1Image7NightLightmix from "@/../public/images/manarat-al-hudaydah/gallery/apartment-1/7-night-lightmix.webp";
import apartment2MARsa1 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-1.webp";
import apartment2MARsa2 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-2.webp";
import apartment2MARsa3 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-3.webp";
import apartment2MARsa4 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-4.webp";
import apartment2MARsa5 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-5.webp";
import apartment2MARsa6 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-6.webp";
import apartment2MARsa7 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-7.webp";
import apartment2MARsa8 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-8.webp";
import apartment2MARsa9 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-9.webp";
import apartment2MARsa10 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-10.webp";
import apartment2MARsa11 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-11.webp";
import apartment2MARsa12 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-12.webp";
import apartment2MARsa13 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-13.webp";
import apartment2MARsa14 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-2/m-a-rsa-14.webp";
import apartment3Image1 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/1.webp";
import apartment3Image2 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/2.webp";
import apartment3Image3 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/3.webp";
import apartment3Image4 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/4.webp";
import apartment3Image5 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/5.webp";
import apartment3Image6 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/6.webp";
import apartment3Image7 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/7.webp";
import apartment3Image8 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/8.webp";
import apartment3Image9 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/9.webp";
import apartment3Image10 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/10.webp";
import apartment3Image11 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/11.webp";
import apartment3Image12 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/12.webp";
import apartment3Image13 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/13.webp";
import apartment3Image14 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/14.webp";
import apartment3Image15 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/15.webp";
import apartment3Image16 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/16.webp";
import apartment3Image17 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-3/17.webp";
import apartment4Image1 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/1.webp";
import apartment4Image2 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/2.webp";
import apartment4Image3 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/3.webp";
import apartment4Image4 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/4.webp";
import apartment4Image5 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/5.webp";
import apartment4Image6 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/6.webp";
import apartment4Image7 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/7.webp";
import apartment4Image8 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/8.webp";
import apartment4Image9 from "@/../public/images/manarat-al-hudaydah/gallery/apartment-4/9.webp";
import exteriorMAE1 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-1.webp";
import exteriorMAE2 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-2.webp";
import exteriorMAE3 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-3.webp";
import exteriorMAE4 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-4.webp";
import exteriorMAE5 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-5.webp";
import exteriorMAE6 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-6.webp";
import exteriorMAE7 from "@/../public/images/manarat-al-hudaydah/gallery/exterior/m-a-e-7.webp";
import parkingMAP1Re from "@/../public/images/manarat-al-hudaydah/gallery/parking/m-a-p-1-re.webp";
import parkingMAP2Re from "@/../public/images/manarat-al-hudaydah/gallery/parking/m-a-p-2-re.webp";
import parkingMAP3Re from "@/../public/images/manarat-al-hudaydah/gallery/parking/m-a-p-3-re.webp";
import parkingMAP4Re from "@/../public/images/manarat-al-hudaydah/gallery/parking/m-a-p-4-re.webp";
import parkingMAP5Re from "@/../public/images/manarat-al-hudaydah/gallery/parking/m-a-p-5-re.webp";
import spaandswimmingpoolMAS9Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s9-nre.webp";
import spaandswimmingpoolMAS1Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-1-nre.webp";
import spaandswimmingpoolMAS1Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-1re.webp";
import spaandswimmingpoolMAS2Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-2-nre.webp";
import spaandswimmingpoolMAS2Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-2re.webp";
import spaandswimmingpoolMAS3Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-3re.webp";
import spaandswimmingpoolMAS4Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-4re.webp";
import spaandswimmingpoolMAS5Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-5-nre.webp";
import spaandswimmingpoolMAS5Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-5re.webp";
import spaandswimmingpoolMAS6Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-6-nre.webp";
import spaandswimmingpoolMAS6Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-6re.webp";
import spaandswimmingpoolMAS8Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-8-nre.webp";
import spaandswimmingpoolMAS8Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-8re.webp";
import spaandswimmingpoolMAS9Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-9re.webp";
import spaandswimmingpoolMAS10Nre from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-10-nre.webp";
import spaandswimmingpoolMAS10Re from "@/../public/images/manarat-al-hudaydah/gallery/spa-and-swimming-pool/m-a-s-10re.webp";

export const imageGallerySection: NonNullable<ProjectData<"ManaratAlHudaydah">["imageGallerySection"]> = [
  {
    title: "imageGallerySection.apartment-1",
    headingTitle: "imageGallerySection.headings.apartment-1.title",
    headingSubtitle: "imageGallerySection.headings.apartment-1.subtitle",
    images: [
      { src: apartment1Image1, alt: "imageGallerySection.images.apartment-1.image-1" },
      { src: apartment1Image2, alt: "imageGallerySection.images.apartment-1.image-2" },
      { src: apartment1Image3, alt: "imageGallerySection.images.apartment-1.image-3" },
      { src: apartment1Image3DayLightmix, alt: "imageGallerySection.images.apartment-1.image-4" },
      { src: apartment1Image4DayLightmix, alt: "imageGallerySection.images.apartment-1.image-5" },
      { src: apartment1Image5, alt: "imageGallerySection.images.apartment-1.image-6" },
      { src: apartment1Image6, alt: "imageGallerySection.images.apartment-1.image-7" },
      { src: apartment1Image6DayLightmix, alt: "imageGallerySection.images.apartment-1.image-8" },
      { src: apartment1Image6NightLightmix, alt: "imageGallerySection.images.apartment-1.image-9" },
      { src: apartment1Image7, alt: "imageGallerySection.images.apartment-1.image-10" },
      { src: apartment1Image7NightLightmix, alt: "imageGallerySection.images.apartment-1.image-11" },
    ],
  },
  {
    title: "imageGallerySection.apartment-2",
    headingTitle: "imageGallerySection.headings.apartment-2.title",
    headingSubtitle: "imageGallerySection.headings.apartment-2.subtitle",
    images: [
      { src: apartment2MARsa1, alt: "imageGallerySection.images.apartment-2.image-1" },
      { src: apartment2MARsa2, alt: "imageGallerySection.images.apartment-2.image-2" },
      { src: apartment2MARsa3, alt: "imageGallerySection.images.apartment-2.image-3" },
      { src: apartment2MARsa4, alt: "imageGallerySection.images.apartment-2.image-4" },
      { src: apartment2MARsa5, alt: "imageGallerySection.images.apartment-2.image-5" },
      { src: apartment2MARsa6, alt: "imageGallerySection.images.apartment-2.image-6" },
      { src: apartment2MARsa7, alt: "imageGallerySection.images.apartment-2.image-7" },
      { src: apartment2MARsa8, alt: "imageGallerySection.images.apartment-2.image-8" },
      { src: apartment2MARsa9, alt: "imageGallerySection.images.apartment-2.image-9" },
      { src: apartment2MARsa10, alt: "imageGallerySection.images.apartment-2.image-10" },
      { src: apartment2MARsa11, alt: "imageGallerySection.images.apartment-2.image-11" },
      { src: apartment2MARsa12, alt: "imageGallerySection.images.apartment-2.image-12" },
      { src: apartment2MARsa13, alt: "imageGallerySection.images.apartment-2.image-13" },
      { src: apartment2MARsa14, alt: "imageGallerySection.images.apartment-2.image-14" },
    ],
  },
  {
    title: "imageGallerySection.apartment-3",
    headingTitle: "imageGallerySection.headings.apartment-3.title",
    headingSubtitle: "imageGallerySection.headings.apartment-3.subtitle",
    images: [
      { src: apartment3Image1, alt: "imageGallerySection.images.apartment-3.image-1" },
      { src: apartment3Image2, alt: "imageGallerySection.images.apartment-3.image-2" },
      { src: apartment3Image3, alt: "imageGallerySection.images.apartment-3.image-3" },
      { src: apartment3Image4, alt: "imageGallerySection.images.apartment-3.image-4" },
      { src: apartment3Image5, alt: "imageGallerySection.images.apartment-3.image-5" },
      { src: apartment3Image6, alt: "imageGallerySection.images.apartment-3.image-6" },
      { src: apartment3Image7, alt: "imageGallerySection.images.apartment-3.image-7" },
      { src: apartment3Image8, alt: "imageGallerySection.images.apartment-3.image-8" },
      { src: apartment3Image9, alt: "imageGallerySection.images.apartment-3.image-9" },
      { src: apartment3Image10, alt: "imageGallerySection.images.apartment-3.image-10" },
      { src: apartment3Image11, alt: "imageGallerySection.images.apartment-3.image-11" },
      { src: apartment3Image12, alt: "imageGallerySection.images.apartment-3.image-12" },
      { src: apartment3Image13, alt: "imageGallerySection.images.apartment-3.image-13" },
      { src: apartment3Image14, alt: "imageGallerySection.images.apartment-3.image-14" },
      { src: apartment3Image15, alt: "imageGallerySection.images.apartment-3.image-15" },
      { src: apartment3Image16, alt: "imageGallerySection.images.apartment-3.image-16" },
      { src: apartment3Image17, alt: "imageGallerySection.images.apartment-3.image-17" },
    ],
  },
  {
    title: "imageGallerySection.apartment-4",
    headingTitle: "imageGallerySection.headings.apartment-4.title",
    headingSubtitle: "imageGallerySection.headings.apartment-4.subtitle",
    images: [
      { src: apartment4Image1, alt: "imageGallerySection.images.apartment-4.image-1" },
      { src: apartment4Image2, alt: "imageGallerySection.images.apartment-4.image-2" },
      { src: apartment4Image3, alt: "imageGallerySection.images.apartment-4.image-3" },
      { src: apartment4Image4, alt: "imageGallerySection.images.apartment-4.image-4" },
      { src: apartment4Image5, alt: "imageGallerySection.images.apartment-4.image-5" },
      { src: apartment4Image6, alt: "imageGallerySection.images.apartment-4.image-6" },
      { src: apartment4Image7, alt: "imageGallerySection.images.apartment-4.image-7" },
      { src: apartment4Image8, alt: "imageGallerySection.images.apartment-4.image-8" },
      { src: apartment4Image9, alt: "imageGallerySection.images.apartment-4.image-9" },
    ],
  },
  {
    title: "imageGallerySection.exterior",
    headingTitle: "imageGallerySection.headings.exterior.title",
    headingSubtitle: "imageGallerySection.headings.exterior.subtitle",
    images: [
      { src: exteriorMAE1, alt: "imageGallerySection.images.exterior.image-1" },
      { src: exteriorMAE2, alt: "imageGallerySection.images.exterior.image-2" },
      { src: exteriorMAE3, alt: "imageGallerySection.images.exterior.image-3" },
      { src: exteriorMAE4, alt: "imageGallerySection.images.exterior.image-4" },
      { src: exteriorMAE5, alt: "imageGallerySection.images.exterior.image-5" },
      { src: exteriorMAE6, alt: "imageGallerySection.images.exterior.image-6" },
      { src: exteriorMAE7, alt: "imageGallerySection.images.exterior.image-7" },
    ],
  },
  {
    title: "imageGallerySection.parking",
    headingTitle: "imageGallerySection.headings.parking.title",
    headingSubtitle: "imageGallerySection.headings.parking.subtitle",
    images: [
      { src: parkingMAP1Re, alt: "imageGallerySection.images.parking.image-1" },
      { src: parkingMAP2Re, alt: "imageGallerySection.images.parking.image-2" },
      { src: parkingMAP3Re, alt: "imageGallerySection.images.parking.image-3" },
      { src: parkingMAP4Re, alt: "imageGallerySection.images.parking.image-4" },
      { src: parkingMAP5Re, alt: "imageGallerySection.images.parking.image-5" },
    ],
  },
  {
    title: "imageGallerySection.spa-and-swimming-pool",
    headingTitle: "imageGallerySection.headings.spa-and-swimming-pool.title",
    headingSubtitle: "imageGallerySection.headings.spa-and-swimming-pool.subtitle",
    images: [
      { src: spaandswimmingpoolMAS9Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-1" },
      { src: spaandswimmingpoolMAS1Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-2" },
      { src: spaandswimmingpoolMAS1Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-3" },
      { src: spaandswimmingpoolMAS2Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-4" },
      { src: spaandswimmingpoolMAS2Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-5" },
      { src: spaandswimmingpoolMAS3Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-6" },
      { src: spaandswimmingpoolMAS4Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-7" },
      { src: spaandswimmingpoolMAS5Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-8" },
      { src: spaandswimmingpoolMAS5Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-9" },
      { src: spaandswimmingpoolMAS6Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-10" },
      { src: spaandswimmingpoolMAS6Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-11" },
      { src: spaandswimmingpoolMAS8Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-12" },
      { src: spaandswimmingpoolMAS8Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-13" },
      { src: spaandswimmingpoolMAS9Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-14" },
      { src: spaandswimmingpoolMAS10Nre, alt: "imageGallerySection.images.spa-and-swimming-pool.image-15" },
      { src: spaandswimmingpoolMAS10Re, alt: "imageGallerySection.images.spa-and-swimming-pool.image-16" },
    ],
  },
];
