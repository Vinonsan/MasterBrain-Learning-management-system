import Button from "@/src/components/base/Button";
import SectionHeading from "@/src/components/layouts/SectionHeading";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactItems = [
  {
    title: "Phone / WhatsApp",
    value: "+94 075 831 1995",
    description: "Call or WhatsApp us anytime during working hours",
    icon: Phone,
    action: "tel:+94758311995",
  },
  {
    title: "Email Address",
    value: "support@masterbrain.site",
    description: "Send us your questions anytime",
    icon: Mail,
    action: "mailto:support@masterbrain.site",
  },
  {
    title: "Location",
    value: "Point Pedro Road, Kankesanthurai",
    description: "Online & physical learning support",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Mon – Sat : 9.00 AM – 7.00 PM",
    description: "Sunday closed",
    icon: Clock,
  },
];

export default function ContactInformation() {
  return (
    <section className="py-8">

      <SectionHeading
        title="Contact Details"
        subtitle=" Have questions about courses, enrollment, or career guidance? Reach out to us — we’re happy to help."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          const CardWrapper = item.action ? "a" : "div";

          return (
            <CardWrapper
              key={index}
              href={item.action}
              className="group bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h4>

              <p className="text-primary font-medium mb-1">
                {item.value}
              </p>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </CardWrapper>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Button
        variant="rounded"
         href="https://wa.me/94758311995"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5" />
          Chat with us on WhatsApp
        </Button>

      </div>
    </section>
  );
}
