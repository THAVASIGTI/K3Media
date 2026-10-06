import Image from "next/image";
import { IMAGES, type ImageKey } from "@/lib/images";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";

type Props = {
  crumbs: { label: string; href?: string }[];
  lines: string[];
  accentLine?: number;
  intro?: string;
  image?: ImageKey;
  /** animated illustration shown in the wide frame instead of a photo */
  art?: React.ReactNode;
  children?: React.ReactNode;
};

/** Header for inner pages: breadcrumb, masked headline, intro and an optional wide image. */
export default function PageHero({ crumbs, lines, accentLine, intro, image, art, children }: Props) {
  return (
    <section className="pb-16 pt-32 md:pb-24 md:pt-44">
      <Container>
        <Breadcrumb items={crumbs} />
        <h1 className="mt-8 max-w-6xl font-display text-[clamp(2.6rem,6.4vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
          <SplitWords lines={lines} accentLine={accentLine} delay={0.1} onMount />
        </h1>
        {intro && (
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{intro}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.5} className="mt-10">{children}</Reveal>}
        {art && (
          <Reveal delay={0.3} y={60} className="mt-14 md:mt-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[16/9] md:aspect-[21/9]">{art}</div>
          </Reveal>
        )}
        {!art && image && (
          <Reveal delay={0.3} y={60} className="mt-14 md:mt-20">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] md:aspect-[21/9]">
              <Image src={IMAGES[image].src} alt={IMAGES[image].alt} fill preload sizes="100vw" className="object-cover" />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
