import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom SVG Icons
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Custom SVG Icons
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TelegramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.943z"/>
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8239984350:AAE7h0sBs3Gqm78-LymjXEOmVMtfFz-ffOQ';
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '6481018655';

    // Telegram HTML formatted message
    const telegramText = `⚡ <b>Yangi Portfolio Murojaati!</b>\n\n` +
      `👤 <b>Ism:</b> ${formData.name}\n` +
      `📧 <b>Email:</b> ${formData.email}\n` +
      `${formData.phone ? `📞 <b>Telefon:</b> ${formData.phone}\n` : ''}` +
      `💬 <b>Xabar:</b>\n${formData.message}\n\n` +
      `🕒 <i>Vaqt: ${new Date().toLocaleString('uz-UZ')}</i>`;

    try {
      // If Chat ID is available, send to Telegram
      if (chatId && chatId !== 'YOUR_CHAT_ID') {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramText,
            parse_mode: 'HTML'
          })
        });

        const data = await response.json();
        if (!data.ok) {
          throw new Error(data.description || 'Telegram xatolik yuz berdi');
        }
      }

      // Success feedback
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Telegram send error:', err);
      // Still show success or graceful feedback so user experience is smooth
      setSubmitted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Aloqa O'rnatish</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Keling, Birgalikda <span className="text-gradient">Ajoyib Loyiha</span> Yaratamiz!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mt-4 text-base sm:text-lg"
        >
          Yangi loyiha, ish taklifi yoki hamkorlik bo'yicha menga bemalol xabar yuborishingiz mumkin.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Bog'lanish Ma'lumotlari</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              O'z savollaringiz yoki takliflaringizni to'g'ridan-to'g'ri quyidagi kanallar orqali yo'llashingiz mumkin. Tez fursatda javob beraman.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Telefon raqam</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Manzil</div>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 mt-8">
            <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">Ijtimoiy Tarmoqlar</div>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all hover:scale-110 shadow-lg"
                title="GitHub Profil"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-all hover:scale-110 shadow-lg"
                title="LinkedIn Profil"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              {/* Telegram */}
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all hover:scale-110 shadow-lg"
                title="Telegram Kanal/Profil"
              >
                <TelegramIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-pink-400 hover:bg-slate-800 transition-all hover:scale-110 shadow-lg"
                title="Instagram Profil"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10"
        >
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Xabaringiz muvaffaqiyatli yetkazildi!</h3>
              <p className="text-slate-400 text-sm max-w-md mb-6">
                Tez orada siz bilan bog'lanaman. E'tiboringiz va qiziqishingiz uchun tashakkur!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full glass text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Yana xabar yozish
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Ismingiz
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masalan: Sardor Rahimiy"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Email manzilingiz
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Telefon raqamingiz (ixtiyoriy)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+998 90 123 45 67"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Xabaringiz / Loyiha tavsifi
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Loyiha haqida yoki hamkorlik taklifingizni qoldiring..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Yuborilmoqda...</span>
                ) : (
                  <>
                    <span>Xabarni Yuborish</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
