// Company facts sourced from references/Profile Hà Thủy Anh 2026 A4 copy.pdf
// (page numbers refer to the PDF page index, 1–24).

export interface PhoneNumber {
  display: string;
  tel: string;
  zalo: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const company = {
  legalName: "DOANH NGHIỆP TƯ NHÂN HÀ THỦY ANH",
  brand: "HÀ THỦY ANH",
  shortName: "Hà Thủy Anh",
  tagline: "Niềm tin của mọi công trình",
  url: "https://hathuyanh.vn",
  representative: "Phạm Thanh Hà",
  representativeTitle: "Giám đốc doanh nghiệp",
  // p.4: "cấp giấy phép kinh doanh lần đầu vào ngày 28/11/2011" — Sở KH&ĐT tỉnh Yên Bái
  registrationDate: "28/11/2011",
  registrationIsoDate: "2011-11-28",
  registrationAuthority: "Sở Kế hoạch và Đầu tư tỉnh Yên Bái",
  taxId: "5200608027",
  capital: "9.000.000.000 VNĐ",
  address: {
    street: "Tổ Dân Phố Nước Mát",
    ward: "Phường Âu Lâu",
    province: "Tỉnh Lào Cai",
    country: "Việt Nam",
    full: "Tổ Dân Phố Nước Mát, Phường Âu Lâu, Tỉnh Lào Cai, Việt Nam.",
  },
  phones: [
    { display: "0985 426 522", tel: "+84985426522", zalo: "https://zalo.me/0985426522" },
    { display: "0366 165 165", tel: "+84366165165", zalo: "https://zalo.me/0366165165" },
    { display: "0966 562 076", tel: "+84966562076", zalo: "https://zalo.me/0966562076" },
  ] satisfies PhoneNumber[],
  email: "thuyhayenbai@gmail.com",
  profilePdf: {
    href: "/documents/ho-so-nang-luc-ha-thuy-anh-2026.pdf",
    label: "Tải hồ sơ năng lực 2026",
    meta: "PDF · ~11 MB",
  },
  // Address search only — no verified map pin has been provided by the business.
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Tổ Dân Phố Nước Mát, Phường Âu Lâu, Lào Cai"),
  // Static to keep the page fully prerendered; update yearly.
  copyrightYear: 2026,
} as const;

export const primaryPhone = company.phones[0];

export const navItems: NavItem[] = [
  { label: "Trang chủ", href: "#trang-chu" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Lĩnh vực hoạt động", href: "#linh-vuc" },
  { label: "Năng lực", href: "#nang-luc" },
  { label: "Công trình", href: "#cong-trinh" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const heroHighlights = [
  { value: "20.000 m²", label: "Tổng diện tích kho bãi" },
  { value: "10 xe", label: "Xe tải, xe nâng, xe cẩu" },
  { value: "Từ 2011", label: "Đăng ký kinh doanh lần đầu" },
];

// p.5 — Tầm nhìn, sứ mệnh, giá trị cốt lõi
export const vision =
  "Trở thành đơn vị cung ứng vật liệu xây dựng uy tín hàng đầu tỉnh Yên Bái, là đối tác đáng tin cậy của các nhà thầu, chủ đầu tư và đơn vị thi công trong mọi dự án xây dựng.";

export const missions = [
  "Cung cấp vật liệu đạt tiêu chuẩn chất lượng, đảm bảo nguồn hàng ổn định.",
  "Đáp ứng tiến độ giao hàng nhanh chóng, hỗ trợ hiệu quả cho từng công trình.",
  "Tư vấn giải pháp vật liệu phù hợp với nhu cầu thực tế của khách hàng.",
  "Xây dựng quan hệ hợp tác bền vững, lâu dài với đối tác.",
];

export const coreValues = [
  {
    title: "Uy tín",
    description: "Giữ chữ tín trong mọi cam kết về chất lượng và tiến độ cung ứng.",
  },
  {
    title: "Chất lượng",
    description: "Vật liệu đạt tiêu chuẩn kỹ thuật, nguồn gốc rõ ràng.",
  },
  {
    title: "Tận tâm",
    description: "Tinh thần trách nhiệm cao, sẵn sàng hỗ trợ và tư vấn phù hợp.",
  },
  {
    title: "Minh bạch",
    description: "Thông tin rõ ràng về sản phẩm, giá cả và quy trình làm việc.",
  },
  {
    title: "Phát triển bền vững",
    description: "Không ngừng nâng cao dịch vụ, mở rộng hợp tác lâu dài.",
  },
];
