import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";

// Brand color map for tech icons
const BRAND_COLORS: Record<string, string> = {
  typescript: "#3178c6",
  js: "#f7df1e",
  python: "#3776ab",
  php: "#777bb4",
  java: "#007396",
  cpp: "#00599c",
  html5: "#e34f26",
  css3: "#1572b6",
  nodejs: "#339933",
  bun: "#000000",
  express: "#000000",
  restapi: "#e535ab",
  graphql: "#e10098",
  webrtc: "#333333",
  socketio: "#010101",
  jwt: "#000000",
  oauth2: "#ec1c24",
  react: "#61dafb",
  nextjs2: "#000000",
  tailwindcss: "#38bdf8",
  "shadcn-ui": "#000000",
  radixui: "#000000",
  motion: "#ea4c89",
  "mobx-state-tree": "#ea4c1d",
  redux: "#764abc",
  antd: "#0170fe",
  "react-router": "#ca4245",
  "react-navigation": "#000000",
  loopback: "#3f4e75",
  laravel: "#ff2d20",
  git: "#f05032",
  github: "#181717",
  docker: "#2496ed",
  "docker-compose": "#2496ed",
  mysql: "#4479a1",
  postgresql: "#4169e1",
  mongodb: "#47a248",
  redis: "#dc382d",
  prisma: "#2d3748",
  figma: "#f24e1e",
  ps: "#31a8ff",
  chatgpt: "#10a37f",
  postman: "#ff6c37",
  vercel: "#000000",
  aws: "#ff9900",
  linux: "#fcc624",
  bash: "#4eaa25",
  "data-structures": "#6c63ff",
  algorithms: "#ffb300",
  "web-security": "#f44336",
  agile: "#0277bd",
};
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {tech.icon ? (
                      <tech.icon
                        //@ts-ignore
                        size={32}
                        aria-label={tech.title}
                        color={
                          [
                            "nextjs2",
                            "express",
                            "github",
                            "vercel",
                            "socketio",
                          ].includes(tech.key)
                            ? undefined
                            : BRAND_COLORS[tech.key] || undefined
                        }
                        className={
                          [
                            "nextjs2",
                            "express",
                            "github",
                            "vercel",
                            "socketio",
                          ].includes(tech.key)
                            ? "text-black dark:text-white"
                            : undefined
                        }
                      />
                    ) : (
                      <span className="h-8 w-8 rounded bg-zinc-200" />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
