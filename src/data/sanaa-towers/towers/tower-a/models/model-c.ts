import modelCImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-c.webp";
import modelCNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-c.webp";
import { ModelData } from "../../../../types";

export const modelC: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-c.name",
  layout: {
    description: "towers.tower-a.model-c.layout.description",
    images: [
      {
        image: modelCImage,
        alt: "towers.tower-a.model-c.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelCImage,
      alt: "towers.tower-a.model-c.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelCNumberedImage,
        alt: "towers.tower-a.model-c.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-a.model-c.details.guest-section.title",
        rooms: [
          "towers.tower-a.model-c.details.guest-section.guest-reception-hall",
          "towers.tower-a.model-c.details.guest-section.majlis-bathroom",
          "towers.tower-a.model-c.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
