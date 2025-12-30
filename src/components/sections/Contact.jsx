import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
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
    <section id="contact" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-display underline decoration-primary/30 decoration-4 underline-offset-8">¿Tienes un proyecto en mente?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estoy disponible para nuevos proyectos y consultorías. Si buscas un desarrollador comprometido con la calidad y la innovación, no dudes en escribirme.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Presencia Digital</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="size-5" />, label: 'GitHub', url: 'https://github.com/edmilsaire' },
                  { icon: <Linkedin className="size-5" />, label: 'LinkedIn', url: 'https://linkedin.com/in/edmilSaire' }
                ].map((link, index) => (
                  <Button key={index} variant="outline" size="sm" className="rounded-xl gap-2 hover:bg-primary/5 hover:border-primary/30 group" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      <span className="group-hover:text-primary transition-colors">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-2">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nombre *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={`w-full bg-background/50 border ${errors.name ? 'border-destructive' : 'border-border/60'} rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50`}
                      />
                      {errors.name && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`w-full bg-background/50 border ${errors.email ? 'border-destructive' : 'border-border/60'} rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50`}
                      />
                      {errors.email && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Asunto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Motivo del contacto"
                      className={`w-full bg-background/50 border ${errors.subject ? 'border-destructive' : 'border-border/60'} rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50`}
                    />
                    {errors.subject && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className={`w-full bg-background/50 border ${errors.message ? 'border-destructive' : 'border-border/60'} rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 resize-none`}
                    />
                    {errors.message && <p className="text-[10px] text-destructive flex items-center gap-1 font-medium"><AlertCircle size={10} /> {errors.message}</p>}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-accent-tertiary/10 border border-accent-tertiary/20 rounded-xl flex items-center gap-3 text-accent-tertiary text-sm">
                      <CheckCircle2 size={18} />
                      <span>¡Mensaje enviado satisfactoriamente!</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-destructive text-sm">
                      <AlertCircle size={18} />
                      <span>Error al enviar. Intenta de nuevo más tarde.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full rounded-xl py-6 text-base shadow-xl shadow-primary/20 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Enviar Propuesta
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
