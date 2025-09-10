import modelHImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-h.webp";
import modelHNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-h.webp";
import { ModelData } from "../../../../types";

export const modelH: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-h.name",
  layout: {
    description: "towers.tower-a.model-h.layout.description",
    images: [
      {
        image: modelHImage,
        alt: "towers.tower-a.model-h.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelHImage,
      alt: "towers.tower-a.model-h.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelHNumberedImage,
        alt: "towers.tower-a.model-h.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-a.model-h.details.guest-section.title",
        rooms: [
          "towers.tower-a.model-h.details.guest-section.guest-reception-hall",
          "towers.tower-a.model-h.details.guest-section.majlis-bathroom",
          "towers.tower-a.model-h.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
