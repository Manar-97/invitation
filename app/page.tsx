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
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

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

  const content = {
    en: {
      hero: "Engagement Celebration 💍",
      name: "Ahmed & Malak",
      celebrate: "Celebrate With Us",
      story: "Our Story",
      storyTitle: "A Beautiful Journey",
      storyDesc:
        "Two hearts, one unforgettable journey filled with love, laughter, and memories.",
      countdown: "Countdown to Our Big Day 💍",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      details: "Event Details",
      place1: "Moonplaza",
      place2: "Works House – Military Building",
      place3: "Kornish El Maadi, Cairo",
      rsvp: "Confirm Attendance",
      nameph: "Your Name",
      msgph: "Your Message",
      send: "Send via WhatsApp",
      thanks: "Thank you for celebrating with us 💍",
    },
    ar: {
      hero: "حفل الخطوبة 💍",
      name: "أحمد & ملك",
      celebrate: "احتفلوا معنا",
      story: "قصتنا",
      storyTitle: "رحلة جميلة",
      storyDesc: "قلبان جمعتهما قصة حب لا تُنسى مليئة بالذكريات الجميلة.",
      countdown: "العد التنازلي 💍",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      details: "تفاصيل الحفل",
      place1: "مون بلازا",
      place2: "دار الاشغال العسكرية",
      place3: "كورنيش المعادي - القاهرة",
      rsvp: "تأكيد الحضور",
      nameph: "الاسم",
      msgph: "رسالتك",
      send: "إرسال واتساب",
      thanks: "شكرًا لمشاركتكم 💍",
    },
  };

  const t = content[lang];

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden"
    >
      {/* LANGUAGE */}
      <div className="fixed top-5 right-5 z-50 flex gap-2">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full text-sm ${lang === "en" ? "bg-white text-black" : "bg-white/20"
            }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ar")}
          className={`px-3 py-1 rounded-full text-sm ${lang === "ar" ? "bg-white text-black" : "bg-white/20"
            }`}
        >
          AR
        </button>
      </div>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <p className="tracking-[6px] text-xs md:text-sm opacity-80">
            {t.hero}
          </p>

          <h1 className="text-4xl md:text-8xl font-serif mt-4">
            {t.name}
          </h1>

          <p className="mt-4 text-sm md:text-lg opacity-90">
            19 • 06 • 2026
          </p>

          <p className="text-sm md:text-lg opacity-90">
            8:00 PM – 12:00 AM
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
            {t.celebrate}
          </button>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
          className="rounded-3xl w-full h-[450px] object-cover"
        />

        <div>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            {t.storyTitle}
          </h2>
          <p className="opacity-80 leading-8">{t.storyDesc}</p>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="bg-[#141414] py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-10">
          {t.countdown}
        </h2>

        <div className="grid grid-cols-3 max-w-2xl mx-auto gap-4">
          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-4xl">{time.days}</h3>
            <p>{t.days}</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-4xl">{time.hours}</h3>
            <p>{t.hours}</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-4xl">{time.minutes}</h3>
            <p>{t.minutes}</p>
          </div>
        </div>
      </section>

      {/* EVENT */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
        <div className="bg-white text-black p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">{t.details}</h3>
          <p>{t.place1}</p>
          <p>{t.place2}</p>
          <p>{t.place3}</p>
        </div>

        <iframe
          className="w-full h-[300px] rounded-3xl"
          src="https://www.google.com/maps?q=Kornish+El+Maadi+Cairo&output=embed"
        />
      </section>

      {/* RSVP */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-serif text-center mb-8">
          {t.rsvp}
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value;

            const text = `💍 RSVP\n\nName: ${name}\nMessage: ${msg}`;
            window.open(
              `https://wa.me/201021319988?text=${encodeURIComponent(text)}`
            );
          }}
        >
          <input
            name="name"
            placeholder={t.nameph}
            className="w-full p-4 rounded-xl text-black"
          />

          <textarea
            name="msg"
            placeholder={t.msgph}
            className="w-full p-4 rounded-xl text-black"
          />

          <button className="w-full bg-green-500 py-4 rounded-xl">
            {t.send}
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 opacity-70">
        <h3 className="text-2xl font-serif">{t.name}</h3>
        <p>{t.thanks}</p>
      </footer>
    </div>
  );
}