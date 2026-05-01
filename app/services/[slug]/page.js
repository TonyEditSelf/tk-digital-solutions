// app/services/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceMedia from "@/components/services/ServiceMedia";
import ServiceDescription from "@/components/services/ServiceDescription";
import ServicePricing from "@/components/services/ServicePricing";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/service-details";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — TK Digital Solutions`,
    description: service.tagline,
  };
}

const ServicePage = ({ params }) => {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <div className="min-h-screen">
      {/* Breadcrumb back link */}
      <div className="container pt-28 pb-0">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </Link>
      </div>

      <ServiceHero service={service} />
      <ServiceMedia title={service.title} />
      <ServiceDescription service={service} />
      <ServicePricing service={service} />
    </div>
  );
};

export default ServicePage;
