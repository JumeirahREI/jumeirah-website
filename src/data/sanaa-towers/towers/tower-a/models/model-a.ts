import modelAImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-a.webp";
import modelANumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-a.webp";
import { ModelData } from "../../../../types";

export const modelA: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-a.name",
  layout: {
    description: "towers.tower-a.model-a.layout.description",
    images: [
      {
        image: modelAImage,
        alt: "towers.tower-a.model-a.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelAImage,
      alt: "towers.tower-a.model-a.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelANumberedImage,
        alt: "towers.tower-a.model-a.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-a.model-a.details.guest-section.title",
        rooms: [
          "towers.tower-a.model-a.details.guest-section.guest-reception-hall",
          "towers.tower-a.model-a.details.guest-section.majlis-bathroom",
          "towers.tower-a.model-a.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
