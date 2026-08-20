import type { SeoArticle } from "@/lib/content";
import { areasHub } from "@/content/areas-hub";
import { babyPhotography } from "@/content/baby-photography";
import { boudoirPhotography } from "@/content/boudoir-photography";
import { burnaby } from "@/content/burnaby";
import { commercialPhotography } from "@/content/commercial-photography";
import { downtownVancouver } from "@/content/downtown-vancouver";
import { eastVancouver } from "@/content/east-vancouver";
import { eventPhotography } from "@/content/event-photography";
import { hairAndMakeup } from "@/content/hair-and-makeup";
import { joyceCollingwood } from "@/content/joyce-collingwood";
import { newWestminster } from "@/content/new-westminster";
import { portraitPhotography } from "@/content/portrait-photography";
import { servicesHub } from "@/content/services-hub";
import { studioRental } from "@/content/studio-rental";
import { weddingPhotography } from "@/content/wedding-photography";

export { servicesHub, areasHub };

export const serviceArticles: Record<string, SeoArticle> = {
  "portrait-photography": portraitPhotography,
  "wedding-photography": weddingPhotography,
  "hair-and-makeup": hairAndMakeup,
  "studio-rental": studioRental,
  "baby-photography": babyPhotography,
  "boudoir-photography": boudoirPhotography,
  "commercial-photography": commercialPhotography,
  "event-photography": eventPhotography,
};

export const areaArticles: Record<string, SeoArticle> = {
  "joyce-collingwood": joyceCollingwood,
  "east-vancouver": eastVancouver,
  burnaby,
  "downtown-vancouver": downtownVancouver,
  "new-westminster": newWestminster,
};
