import modelT1Image from "@/../public/images/sanaa-towers/sanaa-towers-model-t1.webp";
import modelT2Image from "@/../public/images/sanaa-towers/sanaa-towers-model-t2.webp";
import modelT1NumberedImage from "@/../public/images/sanaa-towers/sanaa-towers-numbered-model-t1.webp";
import modelT2NumberedImage from "@/../public/images/sanaa-towers/sanaa-towers-numbered-model-t2.webp";
import { ModelData } from "@/../types";

export const modelT: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-t.name",
  layout: {
    description: "towers.tower-b.model-t.layout.description",
    images: [
      {
        image: modelT1Image,
        alt: "towers.tower-b.model-t.layout.images.image-1",
      },
      {
        image: modelT2Image,
        alt: "towers.tower-b.model-t.layout.images.image-2",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelT1Image,
      alt: "towers.tower-b.model-t.layout.images.image-1",
    },
    {
      image: modelT2Image,
      alt: "towers.tower-b.model-t.layout.images.image-2",
    },
  ],
  details: [
    {
      images: [
        {
          image: modelT1NumberedImage,
          alt: "towers.tower-b.model-t.layout.images.image-1",
        },
        {
          image: modelT2NumberedImage,
          alt: "towers.tower-b.model-t.layout.images.image-2",
        },
      ],
      sections: [
        {
          title:
            "towers.tower-b.model-t.details.first-floor.family-wing-section.title",
          rooms: [
            "towers.tower-b.model-t.details.first-floor.family-wing-section.living-room",
            "towers.tower-b.model-t.details.first-floor.family-wing-section.balcony",
            "towers.tower-b.model-t.details.first-floor.family-wing-section.kitchen",
            "towers.tower-b.model-t.details.first-floor.family-wing-section.storage-room",
            "towers.tower-b.model-t.details.first-floor.family-wing-section.main-bathroom",
          ],
        },
        {
          title:
            "towers.tower-b.model-t.details.first-floor.master-bedroom-suite.title",
          rooms: [
            "towers.tower-b.model-t.details.first-floor.master-bedroom-suite.bedroom",
            "towers.tower-b.model-t.details.first-floor.master-bedroom-suite.dressing-room",
            "towers.tower-b.model-t.details.first-floor.master-bedroom-suite.bathroom",
          ],
        },
      ],
    },
    {
      images: [
        {
          image: modelT1NumberedImage,
          alt: "towers.tower-b.model-t.layout.images.image-1",
        },
        {
          image: modelT2NumberedImage,
          alt: "towers.tower-b.model-t.layout.images.image-2",
        },
      ],
      sections: [
        {
          title:
            "towers.tower-b.model-t.details.second-floor.guest-section.title",
          rooms: [
            "towers.tower-b.model-t.details.second-floor.guest-section.majlis-guest-lounge",
            "towers.tower-b.model-t.details.second-floor.guest-section.majlis-bathroom",
          ],
        },
        {
          title:
            "towers.tower-b.model-t.details.second-floor.family-wing-section.title",
          rooms: [
            "towers.tower-b.model-t.details.second-floor.family-wing-section.storage-room",
            "towers.tower-b.model-t.details.second-floor.family-wing-section.balcony",
            "towers.tower-b.model-t.details.second-floor.family-wing-section.bedroom-1",
            "towers.tower-b.model-t.details.second-floor.family-wing-section.bedroom-2",
            "towers.tower-b.model-t.details.second-floor.family-wing-section.main-bathroom",
          ],
        },
        {
          title:
            "towers.tower-b.model-t.details.second-floor.master-bedroom-suite.title",
          rooms: [
            "towers.tower-b.model-t.details.second-floor.master-bedroom-suite.bedroom",
            "towers.tower-b.model-t.details.second-floor.master-bedroom-suite.dressing-room",
            "towers.tower-b.model-t.details.second-floor.master-bedroom-suite.bathroom",
          ],
        },
      ],
    },
  ],
};
