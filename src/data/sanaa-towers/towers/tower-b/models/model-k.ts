import modelKImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-k.webp";
import modelKNumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-k.webp";
import { ModelData } from "../../../../types";

export const modelK: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-k.name",
  layout: {
    description: "towers.tower-b.model-k.layout.description",
    images: [
      {
        image: modelKImage,
        alt: "towers.tower-b.model-k.layout.images.image-1",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelKImage,
      alt: "towers.tower-b.model-k.layout.images.image-1",
    },
  ],
  details: {
    images: [
      {
        image: modelKNumberedImage,
        alt: "towers.tower-b.model-k.layout.images.image-1",
      },
    ],
    sections: [
      {
        title: "towers.tower-b.model-k.details.guest-section.title",
        rooms: [
          "towers.tower-b.model-k.details.guest-section.guest-reception-hall",
          "towers.tower-b.model-k.details.guest-section.majlis-bathroom",
          "towers.tower-b.model-k.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
