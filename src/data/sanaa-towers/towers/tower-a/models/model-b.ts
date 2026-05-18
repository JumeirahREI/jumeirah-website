import img10InteractiveLightMix from "@/../public/images/sanaa-towers/apartment-b/10_Interactive LightMix.webp";
import img1InteractiveLightMix from "@/../public/images/sanaa-towers/apartment-b/1_Interactive LightMix.webp";
import img2RestUnassigned from "@/../public/images/sanaa-towers/apartment-b/2_Rest (unassigned).webp";
import img4InteractiveLightMix from "@/../public/images/sanaa-towers/apartment-b/4_Interactive LightMix.webp";
import img5InteractiveLightMixCopy from "@/../public/images/sanaa-towers/apartment-b/5_Interactive LightMix - Copy.webp";
import img6InteractiveLightMixCopy from "@/../public/images/sanaa-towers/apartment-b/6_Interactive LightMix - Copy.webp";
import img8InteractiveLightMixCopy from "@/../public/images/sanaa-towers/apartment-b/8_Interactive LightMix - Copy.webp";
import img20250226_082121_414 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_082121_414.webp";
import img20250226_082132_517 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_082132_517.webp";
import img20250226_082149_129 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_082149_129.webp";
import img20250226_082153_539 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_082153_539.webp";
import img20250226_082200_390 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_082200_390.webp";
import img20250226_144130_792 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_144130_792.webp";
import img20250226_144152_260 from "@/../public/images/sanaa-towers/apartment-b/IMG_20250226_144152_260.webp";
import img9047 from "@/../public/images/sanaa-towers/apartment-b/IMG_9047.webp";
import img9048 from "@/../public/images/sanaa-towers/apartment-b/IMG_9048.webp";
import master from "@/../public/images/sanaa-towers/apartment-b/Master.webp";
import master2 from "@/../public/images/sanaa-towers/apartment-b/Master2.webp";
import master3 from "@/../public/images/sanaa-towers/apartment-b/Master3.webp";
import sanaaTowersApartmentPath from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Apartment Path.webp";
import sanaaTowersBedroom1_2_2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Bedroom1 2 (2).webp";
import sanaaTowersBedroom2_2_2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Bedroom2 2 (2).webp";
import sanaaTowersDiwan2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Diwan 2.webp";
import sanaaTowersKitchen1_2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Kitchen 1 (2).webp";
import sanaaTowersEntrance2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers entrance 2.webp";
import sanaaTowersEntrance from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers entrance.webp";
import balconyTest1 from "@/../public/images/sanaa-towers/apartment-b/balcony Test 1.webp";
import balconyTest2 from "@/../public/images/sanaa-towers/apartment-b/balcony Test 2.webp";
import diningArea from "@/../public/images/sanaa-towers/apartment-b/dining area.webp";
import living from "@/../public/images/sanaa-towers/apartment-b/living.webp";
import tvUnit from "@/../public/images/sanaa-towers/apartment-b/tv unit.webp";
import modelBImage from "@/../public/images/sanaa-towers/sanaa-towers-model-b.webp";
import { ModelData } from "@/data/types";

const p = "towers.tower-a.model-b";

export const modelB: ModelData<"SanaaTowers"> = {
  name: `${p}.name`,
  layout: {
    description: `${p}.layout.description`,
    images: [{ image: modelBImage, alt: `${p}.layout.images.image-1` }],
  },
  photos: [
    { image: img1InteractiveLightMix, alt: `${p}.photos.image-1` },
    { image: img2RestUnassigned, alt: `${p}.photos.image-2` },
    { image: img4InteractiveLightMix, alt: `${p}.photos.image-3` },
    { image: img5InteractiveLightMixCopy, alt: `${p}.photos.image-4` },
    { image: img6InteractiveLightMixCopy, alt: `${p}.photos.image-5` },
    { image: img8InteractiveLightMixCopy, alt: `${p}.photos.image-6` },
    { image: img10InteractiveLightMix, alt: `${p}.photos.image-7` },
    { image: balconyTest1, alt: `${p}.photos.image-8` },
    { image: balconyTest2, alt: `${p}.photos.image-9` },
    { image: img20250226_082121_414, alt: `${p}.photos.image-10` },
    { image: img20250226_082132_517, alt: `${p}.photos.image-11` },
    { image: img20250226_082149_129, alt: `${p}.photos.image-12` },
    { image: img20250226_082153_539, alt: `${p}.photos.image-13` },
    { image: img20250226_082200_390, alt: `${p}.photos.image-14` },
    { image: img20250226_144130_792, alt: `${p}.photos.image-15` },
    { image: img20250226_144152_260, alt: `${p}.photos.image-16` },
    { image: img9047, alt: `${p}.photos.image-17` },
    { image: img9048, alt: `${p}.photos.image-18` },
    { image: master, alt: `${p}.photos.image-19` },
    { image: master2, alt: `${p}.photos.image-20` },
    { image: master3, alt: `${p}.photos.image-21` },
    { image: sanaaTowersApartmentPath, alt: `${p}.photos.image-22` },
    { image: sanaaTowersBedroom1_2_2, alt: `${p}.photos.image-23` },
    { image: sanaaTowersBedroom2_2_2, alt: `${p}.photos.image-24` },
    { image: sanaaTowersDiwan2, alt: `${p}.photos.image-25` },
    { image: sanaaTowersKitchen1_2, alt: `${p}.photos.image-26` },
    { image: sanaaTowersEntrance2, alt: `${p}.photos.image-27` },
    { image: sanaaTowersEntrance, alt: `${p}.photos.image-28` },
    { image: diningArea, alt: `${p}.photos.image-29` },
    { image: living, alt: `${p}.photos.image-30` },
    { image: tvUnit, alt: `${p}.photos.image-31` },
  ],
  details: [
    {
      images: [{ image: modelBImage, alt: `${p}.layout.images.image-1` }],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.75m x 3.10m" },
            { key: "majlis-bathroom", dimensions: "2.05m x 2.05m" },
            { key: "majlis-guest-lounge", dimensions: "7.45m x 3.75m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "9.40m x 4.60m" },
            { key: "balcony", dimensions: "4.35m x 1.60m" },
            { key: "kitchen", dimensions: "5.25m x 3.00m" },
            { key: "storage-room", dimensions: "2.55m x 1.55m" },
            { key: "maid-room", dimensions: "2.55m x 1.55m" },
            { key: "bedroom-1", dimensions: "6.00m x 3.45m" },
            { key: "bedroom-2", dimensions: "4.55m x 4.30m" },
            { key: "main-bathroom", dimensions: "3.05m x 2.05m" },
          ],
        },
        {
          title: "section-titles.private-bedroom-suite",
          rooms: [
            { key: "bedroom", dimensions: "6.00m x 4.30m" },
            { key: "bathroom", dimensions: "2.60m x 1.35m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.25m x 4.30m" },
            { key: "dressing-room", dimensions: "3.25m x 2.40m" },
            { key: "bathroom", dimensions: "2.70m x 1.65m" },
          ],
        },
      ],
    },
  ],
};
