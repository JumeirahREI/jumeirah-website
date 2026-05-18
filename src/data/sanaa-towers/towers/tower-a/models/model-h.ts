import modelHImage from "@/../public/images/sanaa-towers/sanaa-towers-model-h.webp";
import { ModelData } from "@/data/types";

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
  details: [
    {
      images: [
        {
          image: modelHImage,
          alt: "towers.tower-a.model-h.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.80m x 3.70m" },
            { key: "majlis-bathroom", dimensions: "2.40m x 1.50m" },
            { key: "majlis-guest-lounge", dimensions: "8.30m x 3.70m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "5.25m x 5.10m" },
            { key: "balcony", dimensions: "5.25m x 1.50m" },
            { key: "dining-room", dimensions: "6.60m x 4.00m" },
            { key: "kitchen", dimensions: "4.00m x 4.00m" },
            { key: "bedroom-1", dimensions: "5.00m x 3.25m" },
            { key: "bedroom-2", dimensions: "4.60m x 3.80m" },
            { key: "bedroom-3", dimensions: "5.00m x 3.80m" },
            { key: "main-bathroom", dimensions: "2.80m x 2.05m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.45m x 4.70m" },
            { key: "dressing-room", dimensions: "2.10m x 1.90m" },
            { key: "bathroom", dimensions: "2.80m x 1.95m" },
          ],
        },
      ],
    },
  ],
};
