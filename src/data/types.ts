import type { Messages, NestedKeyOf } from "next-intl";
import { StaticImageData } from "next/image";

export type Project = "SanaaTowers" | "Alhathaa-Towers";

// Use relative keys within the given namespace (e.g., "title", "subtitle", "towers.tower-a.title")
type BaseTranslation<T extends Project> = NestedKeyOf<Messages[T]>;

export type ModelDetailsSection<T extends Project> = {
  title: BaseTranslation<T>;
  rooms: BaseTranslation<T>[];
};

export type ImageData<T extends Project> = {
  image: StaticImageData;
  alt: BaseTranslation<T>;
};

export type ModelData<T extends Project> = {
  name: BaseTranslation<T>;
  layout: {
    description: BaseTranslation<T>;
    images: ImageData<T>[];
  };
  videos?: string[];
  photos?: ImageData<T>[];
  details?: {
    images: ImageData<T>[];
    sections: ModelDetailsSection<T>[];
  };
};

export type TowerData<T extends Project> = {
  name: BaseTranslation<T>;
  models: ModelData<T>[];
};

export type FeatureData<T extends Project> = {
  title: BaseTranslation<T>;
  icon: StaticImageData;
};

export type ProjectData<T extends Project> = {
  projectKey: T;
  title: BaseTranslation<T>;
  subtitle: BaseTranslation<T>;
  videoSection?: {
    title: BaseTranslation<T>;
    description: BaseTranslation<T>;
    videoUrl: string;
  };
  towersSection: TowerData<T>[];
  featuresSection?: {
    title: BaseTranslation<T>;
    subtitle: BaseTranslation<T>;
    features: FeatureData<T>[];
  };
};
