import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Testimonials from '@/components/Testimonials';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Home() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // All 57 gallery images from CDN
 const galleryImages = [
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(1).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(2).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(3).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(4).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(5).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(6).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(7).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(8).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(1).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(2).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(3).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(4).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(5).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(6).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(7).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(8).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(9).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(10).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(11).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42%20(12).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.42.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(1).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(2).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(3).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(4).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(5).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(6).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(7).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(8).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(9).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(10).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(11).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43%20(12).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.44%20(1).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.44%20(2).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.44%20(3).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.44%20(4).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.44.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.00.24.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(1).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(2).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(3).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(4).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(5).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(6).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(7).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.54%20(1).jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.54.jpeg',

  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.06.04.jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.07.12.jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.07.30.jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.09.03.jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.09.35.jpeg',
  'https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.09.53.jpeg',
];

  const suppliers = [
    { 
      name: 'Arquimatt', 
      logo: 'https://de.cdn-website.com/81f7c24bc36c4d448c4d1a6792321105/dms3rep/multi/ARQUIMATT-web-transp.png'
    },
    { 
      name: 'Bigmat', 
      logo: 'https://vectorseek.com/wp-content/uploads/2023/10/BigMat-Logo-Vector.svg--300x100.png'
    },
    { 
      name: 'Leroy Merlin', 
      logo: 'https://logosmarcas.net/wp-content/uploads/2022/04/Leroy-Merlin-Logo.png'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357231444/nzt7vNonUZAFY9pgAHbQ5o/hero-luxury-interior-final-YoyjHtxaeifvEiU4bE5jPM.webp"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              {t('hero.subtitle')}
            </p>


            <a
              href="#portfolio"
              className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors duration-300"
            >
              {t('hero.cta')}
            </a>
            
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-5xl font-bold mb-8 text-gray-900">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t('about.description')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8">
                  <div className="border-l-2 border-amber-600 pl-4">
                    <div className="text-4xl font-serif font-bold text-amber-600 mb-2">500+</div>
                    <p className="text-sm text-gray-600">{t('about.projects')}</p>
                  </div>
                  <div className="border-l-2 border-amber-600 pl-4">
                    <div className="text-4xl font-serif font-bold text-amber-600 mb-2">300+</div>
                    <p className="text-sm text-gray-600">{t('about.clients')}</p>
                  </div>
                  <div className="border-l-2 border-amber-600 pl-4">
                    <div className="text-4xl font-serif font-bold text-amber-600 mb-2">20+</div>
                    <p className="text-sm text-gray-600">{t('about.years')}</p>
                  </div>
                </div>
              </div>

              <div className="relative h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357231444/nzt7vNonUZAFY9pgAHbQ5o/hero-real-ebr_85bb467e.jpg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gray-900">
              {t('services.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Reformas Integrales */}
              <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 mb-6 overflow-hidden">
                  <img
                    src="https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(4).jpeg"
                    alt="Reformas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">
                  {t('services.kitchens')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.kitchens_desc')}
                </p>
              </div>

              {/* Obra Nueva */}
              <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 mb-6 overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357231444/nzt7vNonUZAFY9pgAHbQ5o/WhatsApp Image 2026-03-01 at 17.03.53 (1)_38c2cd56.jpeg"
                    alt="Obra Nueva"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">
                  {t('services.bathrooms')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.bathrooms_desc')}
                </p>
              </div>

              {/* Cuinas */}
              <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 mb-6 overflow-hidden">
                  <img
                    src="https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.43.jpeg"
                    alt="Cuinas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">
                  {t('services.living')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.living_desc')}
                </p>
              </div>

              {/* Banys */}
              <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 mb-6 overflow-hidden">
                  <img
                    src="https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2017.03.53%20(4).jpeg"
                    alt="Banys"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">
                  {t('services.bedrooms')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.bedrooms_desc')}
                </p>
              </div>

              {/* Pintura i acabats */}
              <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 mb-6 overflow-hidden">
                  <img
                    src="https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.41%20(8).jpeg"
                    alt="Pintura"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">
                  {t('services.painting')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.painting_desc')}
                </p>
              </div>

              {/* Paviments i sòls */}
              <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 mb-6 overflow-hidden">
                  <img
                    src="https://ebrobresireformes.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2016.53.44.jpeg"
                    alt="Paviments"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">
                  {t('services.flooring')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('services.flooring_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-white">
          <div className="container">
            <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gray-900">
              {t('portfolio.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Suppliers Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gray-900">
              {t('suppliers.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              {t('suppliers.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              {suppliers.map((supplier, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={supplier.logo}
                    alt={supplier.name}
                    className="h-20 object-contain hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gray-900">
              {t('location.title')}
            </h2>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3247319999997!2d2.2089!3d41.9359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f8f8f8f8f8f9%3A0x1234567890abcdef!2sVic%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-lg">
                {t('location.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gray-900">
              {t('contact.title')}
            </h2>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 font-semibold rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center font-semibold">
                    {t('contact.success')}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
