import modelBImage from "@/../public/images/sanaa-towers/sanaa-towers-model-b.webp";
import modelBNumberedImage from "@/../public/images/sanaa-towers/sanaa-towers-numbered-model-b.webp";
import { ModelData } from "@/../types";

export const modelB: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-b.name",
  layout: {
    description: "towers.tower-a.model-b.layout.description",
    images: [
      {
        image: modelBImage,
        alt: "towers.tower-a.model-b.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelBImage,
      alt: "towers.tower-a.model-b.layout.images.image-1",
    },
  ],
  details: [
    {
      images: [
        {
          image: modelBNumberedImage,
          alt: "towers.tower-a.model-b.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "towers.tower-a.model-b.details.guest-section.title",
          rooms: [
            "towers.tower-a.model-b.details.guest-section.guest-reception-hall",
            "towers.tower-a.model-b.details.guest-section.majlis-bathroom",
            "towers.tower-a.model-b.details.guest-section.majlis-guest-lounge",
          ],
        },
        {
          title: "towers.tower-a.model-b.details.family-wing-section.title",
          rooms: [
            "towers.tower-a.model-b.details.family-wing-section.living-room",
            "towers.tower-a.model-b.details.family-wing-section.balcony",
            "towers.tower-a.model-b.details.family-wing-section.kitchen",
            "towers.tower-a.model-b.details.family-wing-section.storage-room",
            "towers.tower-a.model-b.details.family-wing-section.maid-room",
            "towers.tower-a.model-b.details.family-wing-section.bedroom-1",
            "towers.tower-a.model-b.details.family-wing-section.bedroom-2",
            "towers.tower-a.model-b.details.family-wing-section.main-bathroom",
          ],
        },
        {
          title: "towers.tower-a.model-b.details.private-bedroom-suite.title",
          rooms: [
            "towers.tower-a.model-b.details.private-bedroom-suite.bedroom",
            "towers.tower-a.model-b.details.private-bedroom-suite.bathroom",
          ],
        },
        {
          title: "towers.tower-a.model-b.details.master-bedroom-suite.title",
          rooms: [
            "towers.tower-a.model-b.details.master-bedroom-suite.bedroom",
            "towers.tower-a.model-b.details.master-bedroom-suite.dressing-room",
            "towers.tower-a.model-b.details.master-bedroom-suite.bathroom",
          ],
        },
      ],
    },
  ],
};
