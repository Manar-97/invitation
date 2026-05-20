"use client";

import { useEffect, useState } from "react";

export default function WeddingLandingPage() {
  const weddingDate = new Date("2026-06-19T20:00:00");

  const [lang, setLang] = useState<"en" | "ar">("en");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const update = () => {
      const diff = weddingDate.getTime() - new Date().getTime();

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const t = {
    en: {
      hero: "Engagement Celebration",
      names: "Ahmed & Malak",
      story: "Our Story",
      storyText:
        "A love story written by destiny, full of laughter, memories and beautiful moments.",
      countdown: "Counting Down",
      place2: "Works House",
      place3: "Kornish El Maadi",
      confirm: "RSVP",
      send: "Send via WhatsApp",
      name: "Your Name",
      message: "Message",
      thanks: "Thank you for celebrating with us 💍",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      date: "19 June 2026 • 8:00 PM",
    },
    ar: {
      hero: "حفل الخطوبة",
      names: "أحمد و ملك",
      story: "قصتنا",
      storyText:
        "قصة حب كتبها القدر مليئة بالضحك والذكريات واللحظات الجميلة.",
      countdown: "العد التنازلي",
      place2: "دار الاشغال العسكرية",
      place3: "كورنيش المعادي",
      confirm: "تأكيد الحضور",
      send: "إرسال واتساب",
      name: "الاسم",
      message: "رسالتك",
      thanks: "شكرًا لمشاركتكم فرحتنا 💍",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      date: "١٩ يونيو ٢٠٢٦ • ٨:٠٠ مساءً",
    },
  }[lang];

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbf7f0] text-[#2b2622]"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      {/* LANGUAGE */}
      <div className="fixed top-5 right-5 z-50 flex gap-2">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full shadow ${lang === "en"
            ? "bg-[#b08d57] text-white"
            : "bg-white"
            }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ar")}
          className={`px-4 py-2 rounded-full shadow ${lang === "ar"
            ? "bg-[#b08d57] text-white"
            : "bg-white"
            }`}
        >
          AR
        </button>
      </div>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative z-10 text-white px-6">
          <p className="tracking-[6px] uppercase text-sm opacity-90">
            {t.hero}
          </p>

          <h1
            className="text-5xl md:text-7xl mt-6 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t.names}
          </h1>

          <div className="w-24 h-[2px] bg-[#d8b37a] mx-auto my-5" />

          <p className="text-sm md:text-lg opacity-90">{t.date}</p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2
          className="text-4xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t.story}
        </h2>

        <p className="text-gray-600 leading-8">{t.storyText}</p>
      </section>

      {/* COUNTDOWN */}
      <section className="bg-white py-20 text-center">
        <h2
          className="text-4xl mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t.countdown}
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { v: time.days, l: t.days },
            { v: time.hours, l: t.hours },
            { v: time.minutes, l: t.minutes },
          ].map((x, i) => (
            <div
              key={i}
              className="bg-[#fbf7f0] px-8 py-6 rounded-2xl shadow-md min-w-[120px]"
            >
              <h3 className="text-4xl font-bold">{x.v}</h3>
              <p className="text-sm text-gray-500">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h3
            className="text-2xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {lang === "en" ? "Event Details" : "تفاصيل الحفل"}
          </h3>

          <p>Moonplaza</p>
          <p>{t.place2}</p>
          <p>{t.place3}</p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?q=Moonplaza+Maadi+Cairo&output=embed"
          />
        </div>
      </section>

      {/* RSVP */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2
            className="text-3xl text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t.confirm}
          </h2>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              const text = `💍 RSVP\n\nName: ${name}\nMessage: ${message}`;

              window.open(
                `https://wa.me/201000544642?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
          >
            <input
              name="name"
              placeholder={t.name}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#b08d57]"
            />

            <textarea
              name="message"
              placeholder={t.message}
              className="w-full border rounded-xl p-4 h-32 focus:ring-2 focus:ring-[#b08d57]"
            />

            <button className="w-full bg-[#b08d57] text-white py-4 rounded-xl hover:opacity-90 transition">
              {t.send}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        <p style={{ fontFamily: "'Playfair Display', serif" }}>
          {t.names}
        </p>
        <p className="text-sm mt-2">{t.thanks}</p>
      </footer>
    </div>
  );
}