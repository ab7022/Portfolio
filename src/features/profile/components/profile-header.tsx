import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";
import Image from "next/image";
import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={"https://assets.devlop.app/Abdul.jpg"}
            // src={USER.avatar}
            width={240}
            height={240}
            // src="https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.jpeg"
          />
        </div>

        {/* Flag of India (official ratio 3:2, BIS colors, 24-spoke Ashoka Chakra) */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Flag of India"
          role="img"
        >
          {/* Horizontal tricolour */}
          <rect width="30" height={20 / 3} y={0} fill="#FF671F" />
          <rect width="30" height={20 / 3} y={20 / 3} fill="#FFFFFF" />
          <rect width="30" height={20 / 3} y={(2 * 20) / 3} fill="#046A38" />

          {/* Ashoka Chakra: centered, diameter equals white band height */}
          {/* Spokes (drawn first) */}
          <g
            fill="none"
            stroke="#06038D"
            strokeWidth={20 / 3 / 40}
            strokeLinecap="butt"
          >
            {Array.from({ length: 24 }).map((_, i) => {
              const r = 20 / 6; // half of white band height
              const angle = (i * 15 * Math.PI) / 180;
              const x2 = 15 + r * Math.cos(angle);
              const y2 = 10 + r * Math.sin(angle);
              return <line key={i} x1={15} y1={10} x2={x2} y2={y2} />;
            })}
          </g>
          {/* Outer rim over spokes to get clean edges */}
          <circle
            cx={15}
            cy={10}
            r={20 / 6}
            fill="none"
            stroke="#06038D"
            strokeWidth={20 / 3 / 20}
          />
          {/* Hub */}
          <circle cx={15} cy={10} r={20 / 60} fill="#06038D" />
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
            </SimpleTooltip>
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
