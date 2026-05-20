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

  const galleryImages = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  ];

  const content = {
    en: {
      hero: "Engagement Celebration 💍",
      bridename: "Ahmed & Malak",
      celebrate: "Celebrate With Us",
      story: "Our Story",
      storyTitle: "A Beautiful Journey",
      storyDesc1:
        "Two hearts, one unforgettable journey. We met, laughed, traveled, and built memories together.",
      storyDesc2:
        "Thank you for being part of our special day.",
      countdown: "Counting Down to Our Engagement Day 💍",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      details: "Engagement Details 💍",
      fdname: "Works House",
      sdname: "Kornish El Maadi",
      memories: "Our Memories",
      confirm: "Confirm Attendance",
      yourName: "Your Name",
      message: "Message",
      send: "Send via WhatsApp",
      thanks: "Thank you for celebrating our engagement with us 💍",
    },

    ar: {
      hero: "حفل الخطوبة 💍",
      bridename: "أحمد & ملك",
      celebrate: "احتفلوا معنا",
      story: "قصتنا",
      storyTitle: "رحلة جميلة",
      storyDesc1:
        "قلبان جمعتهما رحلة لا تُنسى مليئة بالضحك والسفر والذكريات الجميلة.",
      storyDesc2:
        "شكرًا لوجودكم ومشاركتنا هذه اللحظة المميزة.",
      countdown: "العد التنازلي ليوم الخطوبة 💍",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      details: "تفاصيل الخطوبة 💍",
      fdname: "دار الاشغال العسكرية",
      sdname: "كورنيش المعادي",
      memories: "ذكرياتنا",
      confirm: "تأكيد الحضور",
      yourName: "الاسم",
      message: "رسالتك",
      send: "إرسال عبر واتساب",
      thanks: "شكرًا لمشاركتكم فرحتنا 💍",
    },
  };

  const t = content[lang];

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#fdf8f4] text-[#4a3d36] min-h-screen overflow-x-hidden"
    >

      {/* LANGUAGE BUTTONS */}
      <div className="fixed top-5 right-5 z-50 flex gap-3">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full shadow-lg transition ${lang === "en"
            ? "bg-black text-white"
            : "bg-white text-black"
            }`}
        >
          EN
        </button>

        <button
          onClick={() => setLang("ar")}
          className={`px-4 py-2 rounded-full shadow-lg transition ${lang === "ar"
            ? "bg-black text-white"
            : "bg-white text-black"
            }`}
        >
          AR
        </button>
      </div>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4">

        {/* Background Image FIX */}
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="hero"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="uppercase tracking-[6px] text-white text-sm md:text-base mb-4">
            {t.hero}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            {t.bridename}
          </h1>

          <p className="text-white text-lg md:text-2xl mb-2">
            Friday , 19 / 6 / 2026
          </p>

          <p className="text-white text-md md:text-xl mb-8">
            8:00 PM – 12:00 AM
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition">
            {t.celebrate}
          </button>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
          className="rounded-[30px] shadow-2xl w-full h-[500px] object-cover"
        />

        <div>
          <p className="uppercase tracking-[5px] text-sm text-[#b38b6d] mb-4">
            {t.story}
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            {t.storyTitle}
          </h2>

          <p className="text-lg leading-9 text-gray-700 mb-6">
            {t.storyDesc1}
          </p>

          <p className="text-lg leading-9 text-gray-700">
            {t.storyDesc2}
          </p>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="bg-[#efe2d8] py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-16">
          {t.countdown}
        </h2>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-5xl font-bold">{time.days}</h3>
            <p>{t.days}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-5xl font-bold">{time.hours}</h3>
            <p>{t.hours}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-5xl font-bold">{time.minutes}</h3>
            <p>{t.minutes}</p>
          </div>
        </div>
      </section>

      {/* EVENT */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">

        <div className="bg-white p-10 rounded-[30px] shadow-xl">
          <h3 className="text-3xl font-serif mb-6">{t.details}</h3>

          <p className="mb-4">Friday, 19 June 2026</p>
          <p className="mb-4">8:00 PM – 12:00 AM</p>
          <p className="mb-4">Moonplaza</p>
          <p className="mb-4">{t.fdname}</p>
          <p>{t.sdname}</p>
        </div>

        <div className="rounded-[30px] overflow-hidden shadow-xl h-[350px] md:h-full">
          <iframe
            title="Engagement Location Map"
            src="https://www.google.com/maps?q=Moonplaza+Works+House+Kornish+El+Maadi+Cairo&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

      </section>

      {/* GALLERY */}
      <section className="bg-[#f6eee8] py-24 px-6">
        <h2 className="text-center text-5xl font-serif mb-16">
          {t.memories}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-2xl h-[300px] w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white p-6 md:p-16 rounded-[30px] shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
            {t.confirm}
          </h2>

          <form
            className="space-y-6 w-full"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              const whatsappMessage = `
💍 RSVP

Name: ${name}
Message:
${message}
        `;

              const phone = "201021319988";

              const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

              window.open(url, "_blank");
            }}
          >

            <input
              type="text"
              name="name"
              placeholder={t.yourName}
              className="w-full border p-4 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-[#caa58c]"
              required
            />

            <textarea
              rows={5}
              name="message"
              placeholder={t.message}
              className="w-full border p-4 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-[#caa58c]"
            />

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl hover:opacity-90 transition"
            >
              {t.send}
            </button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2e2521] text-white text-center py-10">
        <h3 className="text-4xl font-serif mb-3">
          {t.bridename}
        </h3>

        <p>{t.thanks}</p>
      </footer>

    </div>
  );
}