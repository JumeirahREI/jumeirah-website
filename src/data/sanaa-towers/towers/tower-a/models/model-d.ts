import modelDImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-d.webp";
import modelDNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-d.webp";
import { ModelData } from "../../../../types";

export const modelD: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-d.name",
  layout: {
    description: "towers.tower-a.model-d.layout.description",
    images: [
      {
        image: modelDImage,
        alt: "towers.tower-a.model-d.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelDImage,
      alt: "towers.tower-a.model-d.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelDNumberedImage,
        alt: "towers.tower-a.model-d.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-a.model-d.details.guest-section.title",
        rooms: [
          "towers.tower-a.model-d.details.guest-section.guest-reception-hall",
          "towers.tower-a.model-d.details.guest-section.majlis-bathroom",
          "towers.tower-a.model-d.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
