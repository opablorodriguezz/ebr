import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  name: string;
  role: string;
  text_ca: string;
  text_es: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Maria García López',
    role: 'Propietaria, Barcelona',
    text_ca: 'La reforma de la meva casa ha estat excepcional. L\'equip d\'EBR va executar cada detall amb precisió i professionalisme. El resultat supera totes les meves expectatives.',
    text_es: 'La reforma de mi casa ha sido excepcional. El equipo de EBR ejecutó cada detalle con precisión y profesionalismo. El resultado supera todas mis expectativas.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    name: 'Joan Martínez Ruiz',
    role: 'Empresari, Girona',
    text_ca: 'Vaig contractar EBR per a una reforma comercial i van ser impecables. Qualitat, puntualitat i atenció als detalls. Els recomano sense dubte.',
    text_es: 'Contraté a EBR para una reforma comercial y fueron impecables. Calidad, puntualidad y atención a los detalles. Los recomiendo sin duda.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    name: 'Isabel Fernández Sanz',
    role: 'Directora, Tarragona',
    text_ca: 'Els millors professionals que he conegut. Van transformar completament el meu apartament. Cada decisió de disseny va ser perfecta. Totalment recomanat!',
    text_es: 'Los mejores profesionales que he conocido. Transformaron completamente mi apartamento. Cada decisión de diseño fue perfecta. ¡Totalmente recomendado!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
  },
];

export default function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="font-serif text-5xl font-bold text-center mb-4 text-gray-900">
          {language === 'ca' ? 'Què Diuen els Nostres Clients' : 'Qué Dicen Nuestros Clientes'}
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {language === 'ca'
            ? 'Descobreix les experiències dels nostres clients satisfets amb els projectes d\'EBR'
            : 'Descubre las experiencias de nuestros clientes satisfechos con los proyectos de EBR'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{language === 'ca' ? testimonial.text_ca : testimonial.text_es}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
