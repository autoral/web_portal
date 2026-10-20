"use client";
import Image from "next/image";
import { useState } from "react";

// Figma: bg-default px-120 py-112, gap-80 between intro and accordion
// Left: w-400. Overline 12/600. H2 44/600/52/tracking-[-1px]
// Help card: p-24 rounded-[20px] bg-subtle gap-12, icon 28×28
//   Card title: 18/600/26. Card body: 16/400/26. Button: border-[1.5px] px-20 py-11 rounded-[999px] 15/500/22
// Accordion items: border-t + border-b (first item), border-b (rest), py-24
//   Question: 18/600/26. Answer: 16/400/26. Chevron: 28×28

const faqs = [
  { q: "Will my normal wall switches still work?",  a: "Yes. The hub works alongside your switches, and the app updates when someone uses a switch on the wall." },
  { q: "What happens during load-shedding?",        a: "The hub remembers the last state of every device. As soon as power returns, everything restores automatically." },
  { q: "Do I need internet for Autoral Home?",      a: "No. The app controls your home over your home Wi-Fi. Internet is only needed when you want remote access from outside." },
  { q: "Who installs the hub?",                     a: "A trained Autoral installer comes to your home and fits the hub behind your switchboard in about 30 minutes." },
  { q: "Is my home data safe?",                     a: "Yes. All local commands stay on your home Wi-Fi. Remote access uses end-to-end encryption. We never sell your data." },
];

function FAQItem({ q, a, first }: { q: string; a: string; first?: boolean }) {
  const [open, setOpen] = useState(first ?? false);
  return (
    <div className={`border-b ${first ? "border-t" : ""}`} style={{ borderColor: "var(--border-default)" }}>
      <button
        className="flex items-center justify-between w-full text-left"
        style={{ gap: 16, paddingBlock: 24 }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "var(--text-primary)" }}>
          {q}
        </span>
        <span className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", display: "inline-flex" }}>
          <Image src="/icons/icon-arrow-down.svg" alt="" width={28} height={28} />
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)", paddingBottom: 24 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ width: "100%", display: "block", background: "var(--bg-default)" }}
      aria-labelledby="faq-heading">
      <div className="container-inner flex flex-col lg:flex-row items-start gap-12 lg:gap-[80px] section-py">

        {/* Left intro — Figma: w-400 gap-24 */}
        <div className="flex flex-col w-full lg:w-[400px] shrink-0" style={{ gap: 24 }}>
          <div className="flex flex-col" style={{ gap: 16 }}>
            <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
              FAQ
            </p>
            <h2 id="faq-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
              Questions people ask before buying
            </h2>
          </div>

          {/* Help card — Figma: p-24 rounded-[20px] bg-subtle gap-12 */}
          <div className="flex flex-col" style={{ gap: 12, padding: 24, borderRadius: 20, background: "var(--bg-subtle)" }}>
            <Image src="/icons/icon-chat.svg" alt="" width={28} height={28} />
            <p style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "var(--text-primary)" }}>
              Still have a question?
            </p>
            <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
              Message us on WhatsApp and an Autoral expert will reply.
            </p>
            <a href="https://wa.me/8801000000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-[1.5px] rounded-full w-fit transition-opacity hover:opacity-70"
              style={{ padding: "11px 20px", fontSize: 15, fontWeight: 500, lineHeight: "22px", borderColor: "var(--border-strong)", color: "var(--text-primary)" }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Accordion — Figma: flex-1 */}
        <div className="flex flex-col flex-1 w-full">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
