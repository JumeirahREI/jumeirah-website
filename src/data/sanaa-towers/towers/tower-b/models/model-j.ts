import modelJImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-j.webp";
import modelJNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-j.webp";
import { ModelData } from "../../../../types";

export const modelJ: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-j.name",
  layout: {
    description: "towers.tower-b.model-j.layout.description",
    images: [
      {
        image: modelJImage,
        alt: "towers.tower-b.model-j.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelJImage,
      alt: "towers.tower-b.model-j.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelJNumberedImage,
        alt: "towers.tower-b.model-j.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-b.model-j.details.guest-section.title",
        rooms: [
          "towers.tower-b.model-j.details.guest-section.guest-reception-hall",
          "towers.tower-b.model-j.details.guest-section.majlis-bathroom",
          "towers.tower-b.model-j.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
