import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { company } from "@/data/company";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const title = "Hà Thủy Anh | Cung ứng vật liệu xây dựng uy tín";
const description =
  "Doanh nghiệp tư nhân Hà Thủy Anh chuyên cung ứng vật liệu xây dựng, sắt thép, xi măng, cát đá, thiết bị hoàn thiện và sản xuất gạch không nung, cống bê tông.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title,
  description,
  applicationName: company.shortName,
  keywords: [
    "vật liệu xây dựng Lào Cai",
    "vật liệu xây dựng Yên Bái",
    "xi măng",
    "sắt thép xây dựng",
    "cát đá xây dựng",
    "gạch không nung",
    "cống bê tông",
    "thiết bị vệ sinh",
    "Hà Thủy Anh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: company.shortName,
    title,
    description,
    images: [
      {
        url: "/images/og-ha-thuy-anh.jpg",
        width: 1200,
        height: 630,
        alt: "Hà Thủy Anh – Niềm tin của mọi công trình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-ha-thuy-anh.jpg"],
  },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = {
  themeColor: "#102B24",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} antialiased`}>
      <body className="min-h-full">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-ink focus:shadow-lg"
        >
          Bỏ qua đến nội dung chính
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
