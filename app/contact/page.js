// app/contact/page.js
import ContactForm from "@/components/contact/ContactForm";
import { BRAND } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="absolute top-20 left-0 right-0 h-[500px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
            Get in Touch
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
            Let's build something <span className="text-gold-gradient">premium</span>.
          </h1>
          <p className="text-lg text-muted-foreground">
            Share your goals. We'll reply within 24 hours with tailored next steps — no pitch decks, no fluff.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: BRAND.email },
              { icon: Phone, label: "Phone", value: BRAND.phone },
              { icon: MapPin, label: "Location", value: BRAND.location },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map((c) => (
              <div key={c.label} className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-gold-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</div>
                  <div className="font-semibold text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
