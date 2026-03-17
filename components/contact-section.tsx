"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = "Contactanos",
  subtitle = "Rellena el formulario y nos pondremos en contacto.",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error enviando el mensaje");
      }

      setSubmitMessage(
        "✔ Mensaje enviado correctamente. Te responderemos pronto.",
      );
      setIsError(false);

      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitMessage("❌ Hubo un error al enviar el mensaje.");
      setIsError(true);
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitMessage("");
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-primary/80 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h3>

          <p className="text-white/80 text-lg">{subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {/* <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Envíanos un mensaje
            </h2> */}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Número de contacto o email</Label>
                <Input
                  id="contacto"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
             
                />
              </div>
{/* 
              <div className="space-y-2">
                <Label htmlFor="asunto">¿En qué podemos ayudarte?</Label>

                 <Input
                  id="asunto"
                  name="asunto"
                  type="text"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
             
                />
              </div> */}

              <div className="space-y-2">
                {/* <Label htmlFor="mensaje">Mensaje</Label> */}
                <Label htmlFor="mensaje">¿En qué podemos ayudarte?</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje <Send className="h-5 w-5" />
                </>
              )}
            </Button>

            {submitMessage && (
              <p
                className={`text-center font-medium ${
                  isError
                    ? "text-red-500"
                    : "text-green-600 dark:text-green-400"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
