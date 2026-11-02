import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Commitments } from "@/components/sections/Commitments";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Products } from "@/components/sections/Products";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { SupplyProcess } from "@/components/sections/SupplyProcess";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${company.url}/#organization`,
  name: company.legalName,
  alternateName: company.shortName,
  slogan: company.tagline,
  url: company.url,
  logo: `${company.url}/images/branding/logo-ha-thuy-anh.png`,
  image: `${company.url}/images/og-ha-thuy-anh.jpg`,
  email: company.email,
  telephone: company.phones.map((phone) => phone.tel),
  taxID: company.taxId,
  foundingDate: company.registrationIsoDate,
  founder: { "@type": "Person", name: company.representative, jobTitle: company.representativeTitle },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.ward,
    addressRegion: company.address.province,
    addressCountry: "VN",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Lào Cai" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Danh mục vật liệu xây dựng",
    itemListElement: productCategories.map((product) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: product.name },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="noi-dung">
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <Products />
        <Projects />
        <Commitments />
        <SupplyProcess />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
