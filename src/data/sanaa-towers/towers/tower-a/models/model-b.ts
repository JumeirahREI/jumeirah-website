import modelBImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-b.webp";
import modelBNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-b.webp";
import { ModelData } from "../../../../types";

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
  details: {
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
    ],
  },
};
