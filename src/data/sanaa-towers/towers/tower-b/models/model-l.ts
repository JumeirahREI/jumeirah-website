import modelLImage from "@/../public/images/sanaa-towers/sanaa-towers-model-l.webp";
import modelLNumberedImage from "@/../public/images/sanaa-towers/sanaa-towers-numbered-model-l.webp";
import { ModelData } from "@/data/types";

export const modelL: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-l.name",
  layout: {
    description: "towers.tower-b.model-l.layout.description",
    images: [
      {
        image: modelLImage,
        alt: "towers.tower-b.model-l.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelLNumberedImage,
          alt: "towers.tower-b.model-l.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "towers.tower-b.model-l.details.guest-section.title",
          rooms: [
            "towers.tower-b.model-l.details.guest-section.majlis-bathroom",
            "towers.tower-b.model-l.details.guest-section.majlis-guest-lounge",
          ],
        },
        {
          title: "towers.tower-b.model-l.details.family-wing-section.title",
          rooms: [
            "towers.tower-b.model-l.details.family-wing-section.living-room",
            "towers.tower-b.model-l.details.family-wing-section.balcony",
            "towers.tower-b.model-l.details.family-wing-section.kitchen",
            "towers.tower-b.model-l.details.family-wing-section.bedroom",
            "towers.tower-b.model-l.details.family-wing-section.bathroom",
          ],
        },
        {
          title: "towers.tower-b.model-l.details.master-bedroom-suite.title",
          rooms: [
            "towers.tower-b.model-l.details.master-bedroom-suite.bedroom",
            "towers.tower-b.model-l.details.master-bedroom-suite.dressing-room",
            "towers.tower-b.model-l.details.master-bedroom-suite.bathroom",
          ],
        },
      ],
    },
  ],
};
