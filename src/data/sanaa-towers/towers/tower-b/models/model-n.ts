import modelNImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-n.webp";
import modelNNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-n.webp";
import { ModelData } from "../../../../types";

export const modelN: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-n.name",
  layout: {
    description: "towers.tower-b.model-n.layout.description",
    images: [
      {
        image: modelNImage,
        alt: "towers.tower-b.model-n.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelNImage,
      alt: "towers.tower-b.model-n.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelNNumberedImage,
        alt: "towers.tower-b.model-n.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-b.model-n.details.guest-section.title",
        rooms: [
          "towers.tower-b.model-n.details.guest-section.guest-reception-hall",
          "towers.tower-b.model-n.details.guest-section.majlis-bathroom",
          "towers.tower-b.model-n.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
