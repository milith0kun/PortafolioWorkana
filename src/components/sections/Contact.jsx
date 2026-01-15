import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mínimo 10 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const now = new Date();
      const formattedTime = now.toLocaleString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: formattedTime,
        reply_to: formData.email
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="size-5" />, label: 'Email', value: '174449@unsaac.edu.pe', href: 'mailto:174449@unsaac.edu.pe' },
    { icon: <Phone className="size-5" />, label: 'Teléfono', value: '+51 901 246 936', href: 'tel:+51901246936' },
    { icon: <MapPin className="size-5" />, label: 'Ubicación', value: 'Cusco, Perú', href: null }
  ];

  return (
    <section id="contact" className="relative min-h-screen w-full bg-background py-24 px-8 md:px-16 lg:px-20 xl:px-24 overflow-y-auto">
      <div className="mx-auto w-full" style={{ maxWidth: '1800px' }}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Contacto
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Hablemos</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          {/* Info Side - 5 de 12 columnas, pegado a la izquierda */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground font-display mb-4 pb-4 border-b border-border/20">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estoy disponible para nuevos proyectos y consultorías. Si buscas un desarrollador comprometido con la calidad y la innovación, no dudes en escribirme.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-foreground hover:text-primary transition-colors font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Sígueme en
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="size-5" />, label: 'GitHub', url: 'https://github.com/milith0kun' },
                  { icon: <Linkedin className="size-5" />, label: 'LinkedIn', url: 'https://linkedin.com/in/edmilSaire' }
                ].map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side - 7 de 12 columnas, permanece a la derecha */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`w-full bg-background border-b-2 ${errors.name ? 'border-destructive' : 'border-border/40'} px-0 py-3 text-sm transition-all focus:outline-none focus:border-primary placeholder:text-muted-foreground/40`}
                  />
                  {errors.name && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={`w-full bg-background border-b-2 ${errors.email ? 'border-destructive' : 'border-border/40'} px-0 py-3 text-sm transition-all focus:outline-none focus:border-primary placeholder:text-muted-foreground/40`}
                  />
                  {errors.email && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Motivo del contacto"
                  className={`w-full bg-background border-b-2 ${errors.subject ? 'border-destructive' : 'border-border/40'} px-0 py-3 text-sm transition-all focus:outline-none focus:border-primary placeholder:text-muted-foreground/40`}
                />
                {errors.subject && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className={`w-full bg-background border-b-2 ${errors.message ? 'border-destructive' : 'border-border/40'} px-0 py-3 text-sm transition-all focus:outline-none focus:border-primary resize-none placeholder:text-muted-foreground/40`}
                />
                {errors.message && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.message}</p>}
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-accent-tertiary/10 border-l-4 border-accent-tertiary flex items-center gap-3 text-accent-tertiary text-sm">
                  <CheckCircle2 size={18} />
                  <span>¡Mensaje enviado satisfactoriamente!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-destructive/10 border-l-4 border-destructive flex items-center gap-3 text-destructive text-sm">
                  <AlertCircle size={18} />
                  <span>Error al enviar. Intenta de nuevo más tarde.</span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-6 text-base group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar Mensaje
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
