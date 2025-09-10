import modelW1Image from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-w1.webp";
import modelW2Image from "../../../../../../public/images/sanaa-towers/sanaa-towers-model-w2.webp";
import modelW1NumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-w1.webp";
import modelW2NumberedImage from "../../../../../../public/images/sanaa-towers/sanaa-towers-numbered-model-w2.webp";
import { ModelData } from "../../../../types";

export const modelW: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-w.name",
  layout: {
    description: "towers.tower-b.model-w.layout.description",
    images: [
      {
        image: modelW1Image,
        alt: "towers.tower-b.model-w.layout.images.image-1",
      },
      {
        image: modelW2Image,
        alt: "towers.tower-b.model-w.layout.images.image-2",
      },
    ],
  },
  videos: ["https://www.youtube.com/watch?v=wueQKy86aSY&pp=ugUEEgJlbg%3D%3D"],
  photos: [
    {
      image: modelW1Image,
      alt: "towers.tower-b.model-w.layout.images.image-1",
    },
    {
      image: modelW2Image,
      alt: "towers.tower-b.model-w.layout.images.image-2",
    },
  ],
  details: {
    images: [
      {
        image: modelW1NumberedImage,
        alt: "towers.tower-b.model-w.layout.images.image-1",
      },
      {
        image: modelW2NumberedImage,
        alt: "towers.tower-b.model-w.layout.images.image-2",
      },
    ],
    sections: [
      {
        title: "towers.tower-b.model-w.details.guest-section.title",
        rooms: [
          "towers.tower-b.model-w.details.guest-section.guest-reception-hall",
          "towers.tower-b.model-w.details.guest-section.majlis-bathroom",
          "towers.tower-b.model-w.details.guest-section.majlis-guest-lounge",
        ],
      },
    ],
  },
};
