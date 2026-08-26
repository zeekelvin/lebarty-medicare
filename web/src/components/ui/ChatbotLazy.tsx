"use client";

import dynamic from "next/dynamic";

/**
 * Loads the chatbot as its own async chunk after hydration, so the widget's
 * JS (topics, icons, panel) stays out of every page's First Load bundle.
 */
const Chatbot = dynamic(
  () => import("./Chatbot").then((mod) => mod.Chatbot),
  { ssr: false },
);

export function ChatbotLazy() {
  return <Chatbot />;
}
