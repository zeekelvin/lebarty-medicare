"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, CalendarDays, MessageCircle, Phone, Send, X } from "lucide-react";
import {
  chatbotQuickPrompts,
  getChatbotReply,
  type ChatbotReply,
} from "@/lib/chatbot";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  content: string;
  reply?: ChatbotReply;
};

const starterMessage: ChatMessage = {
  id: "starter",
  role: "bot",
  content:
    "Hi, I am the Lebarty website assistant. Ask me about services, care packages, booking, insurance, or location.",
};

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, open]);

  // Move focus into the panel on open so keyboard users land in the chat,
  // and back to the launcher on close (never on initial page load).
  const hasOpened = useRef(false);
  useEffect(() => {
    if (open) {
      hasOpened.current = true;
      inputRef.current?.focus();
    } else if (hasOpened.current) {
      toggleRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const askQuestion = (question: string) => {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;

    const reply = getChatbotReply(cleanQuestion);

    setMessages((current) => [
      ...current,
      { id: makeId(), role: "user", content: cleanQuestion },
      {
        id: makeId(),
        role: "bot",
        content: `${reply.title}\n\n${reply.body}`,
        reply,
      },
    ]);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-4 z-[65] sm:bottom-6 sm:right-6">
      {open ? (
        <section
          id="lebarty-chat-panel"
          role="dialog"
          aria-label="Lebarty website assistant"
          className="mb-4 flex h-[min(620px,calc(100svh-7rem))] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-fg/10 bg-bg shadow-[0_24px_80px_-32px_rgba(11,31,48,0.45)]"
        >
          <header className="flex items-center justify-between gap-4 border-b border-fg/10 bg-[#0b1f30] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                <Bot size={20} strokeWidth={1.9} />
              </span>
              <div>
                <h2 className="font-display text-xl leading-none">
                  Lebarty assistant
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </header>

          <div
            ref={listRef}
            data-lenis-prevent
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
          >
            {messages.map((message) => {
              const ctaClass = cn(
                "mt-3 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-colors",
                message.role === "user"
                  ? "bg-white/14 text-white"
                  : "bg-bg text-accent hover:bg-bg/75",
              );
              const href = message.reply?.href;
              const ctaLabel = message.reply?.ctaLabel ?? "Open page";

              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      message.role === "user"
                        ? "rounded-br-sm bg-accent text-white"
                        : "rounded-bl-sm bg-muted text-fg",
                    )}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                    {href ? (
                      href.startsWith("/") ? (
                        <Link href={href} className={ctaClass}>
                          {ctaLabel}
                        </Link>
                      ) : (
                        <a href={href} className={ctaClass}>
                          {ctaLabel}
                        </a>
                      )
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-fg/10 bg-bg px-4 py-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {chatbotQuickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => askQuestion(prompt)}
                  className="rounded-full border border-fg/10 px-3 py-1.5 text-xs text-fg/68 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about care, booking, packages..."
                className="min-w-0 flex-1 rounded-full border border-fg/12 bg-white px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg/40 focus:border-accent"
                aria-label="Ask the Lebarty assistant"
              />
              <button
                type="submit"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent/90"
                aria-label="Send message"
              >
                <Send size={17} strokeWidth={1.9} />
              </button>
            </form>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-fg/48">
              <a
                href={`tel:${site.contact.phoneTel}`}
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                <Phone size={12} />
                Call
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                <CalendarDays size={12} />
                Book
              </Link>
              <span>Not for emergencies or diagnosis.</span>
            </div>
          </div>
        </section>
      ) : null}

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="ml-auto flex min-h-14 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_44px_-16px_rgba(242,24,114,0.65)] ring-2 ring-white/90 transition-transform hover:scale-105"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls="lebarty-chat-panel"
      >
        {open ? <X size={22} /> : <MessageCircle size={23} />}
        <span>{open ? "Close" : "Chat with us"}</span>
      </button>
    </div>
  );
}
