import type { Messages } from "next-intl";
import { StaticImageData } from "next/image";

export type Project = "SanaaTowers" | "Alhathaa-Towers" | "ManaratAlHudaydah";

// Utility type to get only leaf dot-path keys of a nested object
type LeafPaths<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.${LeafPaths<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

type BaseTranslation<T extends Project> = LeafPaths<Messages[T]>;

export type ModelDetailsSection<T extends Project> = {
  title: BaseTranslation<T>;
  rooms: BaseTranslation<T>[];
};

export type ImageData<T extends Project> = {
  image: StaticImageData;
  alt: BaseTranslation<T>;
};

export type ModelDetails<T extends Project> = {
  images: ImageData<T>[];
  sections: ModelDetailsSection<T>[];
};

export type ModelData<T extends Project> = {
  name: BaseTranslation<T>;
  layout: {
    description: BaseTranslation<T>;
    images: ImageData<T>[];
  };
  videos?: string[];
  photos?: ImageData<T>[];
  details: ModelDetails<T>[];
};

export type TowerData<T extends Project> = {
  name: BaseTranslation<T>;
  models: ModelData<T>[];
};

export type FeatureData<T extends Project> = {
  title: BaseTranslation<T>;
  icon: StaticImageData;
};

export type ServiceData<T extends Project> = {
  title: BaseTranslation<T>;
  icon: StaticImageData;
  backgroundImage: StaticImageData;
};

export type ImageGallery<T extends Project> = {
  src: StaticImageData;
  alt: BaseTranslation<T>;
};

export type ProjectData<T extends Project> = {
  projectKey: T;
  title: BaseTranslation<T>;
  subtitle: BaseTranslation<T>;
  videoSection?: {
    title: BaseTranslation<T>;
    description: BaseTranslation<T>;
    videoUrl?: string;
    videoThumbnail: StaticImageData;
  };
  towersSection: TowerData<T>[];
  featuresSection?: {
    title: BaseTranslation<T>;
    subtitle: BaseTranslation<T>;
    features: FeatureData<T>[];
  };
  servicesSection?: {
    title: BaseTranslation<T>;
    subtitle: BaseTranslation<T>;
    services: ServiceData<T>[];
  };
  imageGallerySection?: {
    title: BaseTranslation<T>;
    headingTitle: BaseTranslation<T>;
    headingSubtitle: BaseTranslation<T>;
    images: ImageGallery<T>[];
  }[];
};
