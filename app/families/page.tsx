import Image from "next/image";
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";
import families from "./families-data.json";

interface Family {
  id: string;
  name: string;
  image: string;
  instagramUrl: string;
  description: string;
}

// Zigzag row inset from page edges — increase ms/me values to move rows toward center.
const familyRowInsetFromEdge = {
  left: "ms-6 md:ms-16 lg:ms-24",
  right: "me-6 md:me-16 lg:me-24",
};

const familyBoxWidth = "w-64 md:w-72";
const familyImageClass = cn(
  "relative aspect-square shrink-0 overflow-hidden rounded-lg",
  familyBoxWidth,
);
const familyTextClass = cn(
  "flex shrink-0 flex-col rounded-lg p-4",
  familyBoxWidth,
  "min-h-64 md:min-h-72",
);

// Optional decorative graphic on a family row — edit className for size/position.
const rowGraphic = {
  familyId: "guppies",
  src: "/images/graphics/halfmoon-betta-fish.png",
  width: 400,
  height: 520,
  className:
    "pointer-events-none absolute right-0 top-1/2 hidden h-80 w-auto -translate-y-1/2 object-contain md:block lg:right-8 lg:h-96",
};

function FamilySection({ family, index }: { family: Family; index: number }) {
  const imageOnLeft = index % 2 === 0;
  const showRowGraphic = rowGraphic.familyId === family.id;

  return (
    <ScrollReveal
      className={cn(
        "relative flex w-full",
        imageOnLeft ? "justify-start" : "justify-end",
      )}
    >
      <div
        className={cn(
          "flex w-fit items-center gap-2 md:gap-4",
          imageOnLeft
            ? familyRowInsetFromEdge.left
            : familyRowInsetFromEdge.right,
        )}
      >
        <article
          className={cn(
            "flex w-fit flex-col gap-5 md:items-start md:gap-6",
            imageOnLeft
              ? "items-start md:flex-row"
              : "items-end md:flex-row-reverse",
          )}
        >
          <div className={familyImageClass}>
            <Image
              src={family.image || "/placeholder.svg"}
              alt={`${family.name} family photo`}
              fill
              sizes="(max-width: 768px) 256px, 288px"
              className="object-cover"
            />
          </div>

          <div className={familyTextClass}>
            <h2 className="mb-2 text-lg font-bold leading-tight dark:text-primary-foreground md:text-xl">
              {family.name}
            </h2>
            <p className="mb-4 text-sm leading-snug dark:text-foreground">
              {family.description}
            </p>
            <a
              href={family.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80 dark:text-primary-foreground dark:hover:text-primary-foreground/80"
            >
              <Instagram className="h-4 w-4" />
              <span>View on Instagram</span>
            </a>
          </div>
        </article>
      </div>
      {showRowGraphic && (
        <Image
          src={rowGraphic.src}
          alt=""
          width={rowGraphic.width}
          height={rowGraphic.height}
          aria-hidden
          className={rowGraphic.className}
        />
      )}
    </ScrollReveal>
  );
}

const familyList = families as Family[];

export default function FamiliesPage() {
  return (
    <div className="container-custom !px-2 sm:!px-4">
      <div className="section-title">
        <h1>CSA Families</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Every year, all members are assigned to different families. Families
          play a major role in CSA&apos;s social activities, from organizing
          family events to creating a sense of community for both new and old
          members. The family system cultivates strong connections, fostering
          friendships and shared experiences that define the essence of the CSA.
        </p>
      </div>

      <div className="mt-12 space-y-20 md:mt-16 md:space-y-28">
        {familyList.map((family, index) => (
          <FamilySection key={family.id} family={family} index={index} />
        ))}
      </div>
    </div>
  );
}
