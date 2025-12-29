import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import BrandMark from '../ui/BrandMark';
import './Contact.css';

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

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Aquí puedes integrar EmailJS o Formspree
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Formulario enviado:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: '174449@unsaac.edu.pe',
      href: 'mailto:174449@unsaac.edu.pe'
    },
    {
      icon: <Phone size={24} />,
      label: 'Teléfono',
      value: '+51 901 246 936',
      href: 'tel:+51901246936'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Ubicación',
      value: 'Cusco, Perú',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/edmilsaire'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/edmilSaire'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contact" className="section contact">
      <BrandMark variant="large" position="center" />
      <div className="container">
        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos"
        />

        <div className="contact-content">
          {/* Información de contacto */}
          <motion.div className="contact-info" {...fadeInUp}>
            <h3 className="contact-info-title">Información de Contacto</h3>
            <p className="contact-info-description">
              Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="contact-info-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4 className="contact-social-title">Sígueme en</h4>
              <div className="contact-social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            className="contact-form-wrapper"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                  placeholder="Motivo del contacto"
                />
                {errors.subject && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
                {errors.message && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.message}
                  </span>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="form-message form-message-success">
                  <CheckCircle2 size={20} />
                  <span>¡Mensaje enviado exitosamente! Te responderé pronto.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message form-message-error">
                  <AlertCircle size={20} />
                  <span>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</span>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                icon={<Send size={18} />}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
