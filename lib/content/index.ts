import { dataStructures } from "./dsa/data-structures";
import { algorithms } from "./dsa/algorithms";
import { patterns } from "./dsa/patterns";
import { ContentItem } from "./types";

export const contentData: ContentItem[] = [
  ...dataStructures,
  ...algorithms,
  ...patterns,
];

export * from "./types";
