import Image from "next/image";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { cn } from "@/lib/utils";
export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-4/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        {/* <ChanhDaiMark id="js-cover-mark" className="h-1/4 w-auto" /> */}
        {/* Light mode logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={200}
          className="block h-1/4 w-auto scale-300 dark:hidden"
          priority
        />
        {/* Dark mode logo */}
        <Image
          src="/logo-white.svg"
          alt="Logo"
          width={200}
          height={200}
          className="hidden h-1/4 w-auto scale-300 dark:block"
          priority
        />
      </div>
    </BrandContextMenu>
  );
}
