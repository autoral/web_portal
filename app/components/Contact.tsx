"use client";
import Image from "next/image";
import { useState } from "react";

// Figma: bg-subtle px-120 py-112, gap-64 between info and form
// Info col: w-480 gap-32. Overline 12/600. H2 44/600/52. Body Large 18/400/28
// Contact list: gap-20. Each row: gap-16. Icon container: 48×48 rounded-[24px] border bg-default
//   Label: 14/400/20 secondary. Value: 15/500/22 primary
// Map placeholder: h-180 rounded-[20px] bg-tile-off
// Form card: flex-1 p-40 rounded-[28px] shadow-Elevation/1 bg-default
//   Form title: 24/600/32/tracking-[-0.2px]. Subtitle: 16/400/26
//   Input label: 15/500/22. Input: h-52 px-16 rounded-[12px] border text-16/400/26
//   Phone input: prefix "+880" + divider + input
//   Interest chips: px-16 py-10 rounded-[999px] border. Active: bg-inverse text-on-inverse
//   Textarea: h-120 pt-14 px-16 rounded-[12px] border
//   Submit: py-16 px-28 rounded-[999px] bg-inverse 15/500/22
//   Disclaimer: 14/400/20 secondary center

const contactItems = [
  { icon: "/icons/icon-call.svg",          label: "Phone",     value: "+880 1XXX-XXXXXX" },
  { icon: "/icons/icon-whatsapp-dark.svg", label: "WhatsApp",  value: "+880 1XXX-XXXXXX" },
  { icon: "/icons/icon-mail.svg",          label: "Email",     value: "hello@autoralhome.com" },
  { icon: "/icons/icon-location.svg",      label: "Office",    value: "Dhaka, Bangladesh" },
  { icon: "/icons/icon-schedule.svg",      label: "Hours",     value: "Sat–Thu, 10:00 AM – 7:00 PM" },
];

const interests = ["Buying a hub", "Installation", "Partnership", "Other"];

export default function Contact() {
  const [selected, setSelected] = useState("Buying a hub");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" style={{ width: "100%", display: "block", background: "var(--bg-subtle)" }}
      aria-labelledby="contact-heading">
      <div className="container-inner flex flex-col lg:flex-row items-start gap-12 lg:gap-[64px] section-py">

        {/* Contact info — Figma: w-480 gap-32 */}
        <div className="flex flex-col w-full lg:w-[480px] shrink-0" style={{ gap: 32 }}>
          <div className="flex flex-col" style={{ gap: 16 }}>
            <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
              Contact
            </p>
            <h2 id="contact-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
              Talk to an Autoral expert
            </h2>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
              Ask for a price, book an installation or become a partner installer.
            </p>
          </div>

          {/* Contact list */}
          <div className="flex flex-col" style={{ gap: 20 }}>
            {contactItems.map(item => (
              <div key={item.label} className="flex items-center" style={{ gap: 16 }}>
                <div className="flex items-center justify-center shrink-0 border"
                  style={{ width: 48, height: 48, borderRadius: 24, background: "var(--bg-default)", borderColor: "var(--border-default)" }}>
                  <Image src={item.icon} alt="" width={22} height={22} />
                </div>
                <div className="flex flex-col" style={{ gap: 2 }}>
                  <span style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>{item.label}</span>
                  <span style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder — Figma: h-180 rounded-[20px] bg-tile-off */}
          <div className="flex flex-col items-center justify-center" style={{ height: 180, borderRadius: 20, background: "var(--tile-off)", gap: 8 }}>
            <Image src="/icons/icon-location-pin.svg" alt="" width={32} height={32} />
            <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>
              Office map · Dhaka
            </p>
          </div>
        </div>

        {/* Form card — Figma: flex-1 p-40 rounded-[28px] Elevation/1 */}
        <div className="flex flex-1 flex-col w-full"
          style={{ padding: 40, borderRadius: 28, background: "var(--bg-default)", boxShadow: "0px 1px 2px rgba(0,0,0,0.08)", gap: 20 }}>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16" style={{ gap: 16 }}>
              <div className="flex items-center justify-center" style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--tile-off)" }}>
                <Image src="/icons/icon-check-circle.svg" alt="" width={32} height={32} />
              </div>
              <p style={{ fontSize: 24, fontWeight: 600, lineHeight: "32px", color: "var(--text-primary)" }}>Message sent!</p>
              <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
                We&apos;ll call you back within 1 working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col" style={{ gap: 20 }}>
              {/* header */}
              <div className="flex flex-col" style={{ gap: 8 }}>
                <p style={{ fontSize: 24, fontWeight: 600, lineHeight: "32px", letterSpacing: "-0.2px", color: "var(--text-primary)" }}>
                  Send us a message
                </p>
                <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
                  We usually call back within 1 working day.
                </p>
              </div>

              {/* name + phone */}
              <div className="flex flex-col sm:flex-row" style={{ gap: 16 }}>
                <div className="flex flex-col flex-1" style={{ gap: 8 }}>
                  <label htmlFor="name" style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
                    Your name
                  </label>
                  <input id="name" type="text" required placeholder="e.g. Abu Taher Molla"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="border bg-transparent outline-none"
                    style={{ height: 52, paddingInline: 16, borderRadius: 12, fontSize: 16, lineHeight: "26px", borderColor: "var(--border-default)", color: "var(--text-primary)" }} />
                </div>
                <div className="flex flex-col flex-1" style={{ gap: 8 }}>
                  <label htmlFor="phone" style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
                    Phone number
                  </label>
                  <div className="flex items-center border"
                    style={{ height: 52, paddingInline: 16, borderRadius: 12, borderColor: "var(--border-default)", gap: 10 }}>
                    <span style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-primary)", whiteSpace: "nowrap" }}>+880</span>
                    <div style={{ width: 1, height: 24, background: "var(--border-default)", flexShrink: 0 }} />
                    <input id="phone" type="tel" required placeholder="1XXX-XXXXXX"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="flex-1 outline-none bg-transparent"
                      style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-primary)" }} />
                  </div>
                </div>
              </div>

              {/* email */}
              <div className="flex flex-col" style={{ gap: 8 }}>
                <label htmlFor="email" style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
                  Email (optional)
                </label>
                <input id="email" type="email" placeholder="you@example.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="border bg-transparent outline-none"
                  style={{ height: 52, paddingInline: 16, borderRadius: 12, fontSize: 16, lineHeight: "26px", borderColor: "var(--border-default)", color: "var(--text-primary)" }} />
              </div>

              {/* interests */}
              <div className="flex flex-col" style={{ gap: 10 }}>
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
                  I&apos;m interested in
                </p>
                <div className="flex flex-wrap" style={{ gap: 8 }}>
                  {interests.map(item => {
                    const active = selected === item;
                    return (
                      <button key={item} type="button" onClick={() => setSelected(item)}
                        className="inline-flex items-center border rounded-full transition-colors"
                        style={{
                          gap: 6, padding: "10px 16px",
                          fontSize: 14, lineHeight: "20px",
                          background: active ? "var(--surface-inverse)" : "transparent",
                          borderColor: active ? "var(--surface-inverse)" : "var(--border-default)",
                          color: active ? "var(--text-on-inverse)" : "var(--text-primary)",
                        }}>
                        {active && <Image src="/icons/icon-check-white.svg" alt="" width={16} height={16} />}
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* message */}
              <div className="flex flex-col" style={{ gap: 8 }}>
                <label htmlFor="message" style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
                  Message
                </label>
                <textarea id="message" rows={4}
                  placeholder="Tell us about your home, e.g. 3-bedroom flat in Mirpur"
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="border bg-transparent outline-none resize-none"
                  style={{ paddingInline: 16, paddingTop: 14, borderRadius: 12, fontSize: 16, lineHeight: "26px", borderColor: "var(--border-default)", color: "var(--text-primary)", minHeight: 120 }} />
              </div>

              {/* submit */}
              <button type="submit"
                className="w-full flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ padding: "16px 28px", fontSize: 15, fontWeight: 500, lineHeight: "22px", background: "var(--surface-inverse)", color: "var(--text-on-inverse)" }}>
                Send message
              </button>

              <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)", textAlign: "center" }}>
                By sending this form you agree to be contacted about Autoral Home.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
