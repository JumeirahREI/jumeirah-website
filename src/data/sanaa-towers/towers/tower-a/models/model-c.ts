import modelCImage from "@/../public/images/sanaa-towers/sanaa-towers-model-c.webp";
import { ModelData } from "@/data/types";

const p = "towers.tower-a.model-c";

export const modelC: ModelData<"SanaaTowers"> = {
  name: `${p}.name`,
  layout: {
    description: `${p}.layout.description`,
    images: [{ image: modelCImage, alt: `${p}.layout.images.image-1` }],
  },
  details: [
    {
      images: [{ image: modelCImage, alt: `${p}.layout.images.image-1` }],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.90m x 3.75m" },
            { key: "majlis-bathroom", dimensions: "2.20m x 2.15m" },
            { key: "majlis-guest-lounge", dimensions: "7.40m x 3.75m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "8.90m x 4.65m" },
            { key: "balcony", dimensions: "4.30m x 1.60m" },
            { key: "kitchen", dimensions: "5.50m x 3.20m" },
            { key: "storage-room", dimensions: "2.90m x 1.40m" },
            { key: "maid-room", dimensions: "3.10m x 1.55m" },
            { key: "maid-bathroom", dimensions: "1.40m x 1.65m" },
            { key: "bedroom-1", dimensions: "5.55m x 3.75m" },
            { key: "bedroom-2", dimensions: "4.50m x 3.55m" },
            { key: "main-bathroom", dimensions: "3.00m x 2.25m" },
          ],
        },
        {
          title: "section-titles.private-bedroom-suite",
          rooms: [
            { key: "bedroom", dimensions: "5.45m x 3.45m" },
            { key: "bathroom", dimensions: "2.60m x 1.45m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "6.60m x 5.15m" },
            { key: "dressing-room", dimensions: "3.75m x 3.45m" },
            { key: "balcony", dimensions: "2.55m x 1.70m" },
            { key: "bathroom", dimensions: "2.70m x 1.95m" },
          ],
        },
      ],
    },
  ],
};
