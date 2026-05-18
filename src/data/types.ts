import { StaticImageData } from "next/image";

export type Project = "SanaaTowers" | "Alhathaa-Towers";

type BaseTranslation<T extends Project> = string & { _project?: T };

export type RoomEntry = {
  key: string;
  dimensions: string;
};

export type ModelDetailsSection<T extends Project> = {
  title: BaseTranslation<T>;
  rooms: RoomEntry[];
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
    videoUrl: string;
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
