import modelLImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-l.webp";
import modelLNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-l.webp";
import { ModelData } from "../../../../types";

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
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelLImage,
      alt: "towers.tower-b.model-l.layout.images.image-1",
    },
  ],
  details: {
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
          "towers.tower-b.model-l.details.guest-section.guest-reception-hall",
          "towers.tower-b.model-l.details.guest-section.majlis-bathroom",
          "towers.tower-b.model-l.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
