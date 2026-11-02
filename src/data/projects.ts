// Công trình tiêu biểu — PDF pp.16–22. The profile lists these as representative projects;
// it does not state Hà Thủy Anh's contractual role, so the site never claims one.

export type ProjectCategoryId =
  | "dan-dung"
  | "cong-nghiep"
  | "hanh-chinh"
  | "giao-duc"
  | "ha-tang"
  | "y-te"
  | "thuong-mai";

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  location?: string;
  category: ProjectCategoryId;
  image: string;
  sourcePage: number;
}

export interface ProjectListGroup {
  category: ProjectCategoryId | "ton-giao";
  title: string;
  items: string[];
}

export const projectCategories: ProjectCategory[] = [
  { id: "dan-dung", label: "Công trình dân dụng" },
  { id: "cong-nghiep", label: "Công trình công nghiệp" },
  { id: "hanh-chinh", label: "Công trình hành chính" },
  { id: "giao-duc", label: "Công trình giáo dục" },
  { id: "ha-tang", label: "Hạ tầng và giao thông" },
  { id: "y-te", label: "Công trình y tế" },
  { id: "thuong-mai", label: "Công trình thương mại" },
];

export const featuredProjects: Project[] = [
  {
    id: "merlinh-plaza",
    name: "MerLinh Plaza",
    location: "826 Điện Biên, Phường Yên Bái",
    category: "thuong-mai",
    image: "/images/projects/merlinh-plaza.jpg",
    sourcePage: 16,
  },
  {
    id: "unico",
    name: "Nhà máy may Unico",
    location: "Khu công nghiệp Âu Lâu, Phường Âu Lâu",
    category: "cong-nghiep",
    image: "/images/projects/nha-may-may-unico.jpg",
    sourcePage: 16,
  },
  {
    id: "hong-duc",
    name: "Bệnh viện Y Cao Hồng Đức",
    location: "763 Điện Biên, Phường Yên Bái",
    category: "y-te",
    image: "/images/projects/benh-vien-y-cao-hong-duc.jpg",
    sourcePage: 16,
  },
  {
    id: "dang-kiem-au-lau",
    name: "Trạm đăng kiểm Âu Lâu",
    location: "TDP Nước Mát, Phường Âu Lâu",
    category: "ha-tang",
    image: "/images/projects/tram-dang-kiem-au-lau.jpg",
    sourcePage: 16,
  },
  {
    id: "cuc-thong-ke",
    name: "Cục Thống kê tỉnh Yên Bái",
    location: "1028 Điện Biên, Phường Yên Bái",
    category: "hanh-chinh",
    image: "/images/projects/cuc-thong-ke-yen-bai.jpg",
    sourcePage: 17,
  },
  {
    id: "ic13",
    name: "Trạm thu phí cao tốc Nội Bài – Lào Cai IC13",
    category: "ha-tang",
    image: "/images/projects/tram-thu-phi-ic13.jpg",
    sourcePage: 17,
  },
  {
    id: "km117",
    name: "Trạm dừng nghỉ Km117",
    location: "Cao tốc Nội Bài – Lào Cai",
    category: "ha-tang",
    image: "/images/projects/tram-dung-nghi-km117.jpg",
    sourcePage: 17,
  },
  {
    id: "cuong-thuy",
    name: "Nhà máy chế biến thực phẩm Cường Thủy",
    location: "KCN Âu Lâu",
    category: "cong-nghiep",
    image: "/images/projects/nha-may-cuong-thuy.jpg",
    sourcePage: 17,
  },
  {
    id: "riverside",
    name: "Khu đô thị Riverside",
    location: "Đường Bách Lẫm, Phường Yên Bái",
    category: "dan-dung",
    image: "/images/projects/khu-do-thi-riverside.jpg",
    sourcePage: 18,
  },
  {
    id: "viettel",
    name: "Công trình Viettel",
    location: "Chợ Ga Yên Bái",
    category: "thuong-mai",
    image: "/images/projects/cong-trinh-viettel.jpg",
    sourcePage: 18,
  },
  {
    id: "ge-coffee",
    name: "Quán cafe Gé Coffee & Tea",
    location: "KĐT Hạnh Phúc Yên Bái",
    category: "thuong-mai",
    image: "/images/projects/ge-coffee-tea.jpg",
    sourcePage: 18,
  },
  {
    id: "hoa-phat-farm",
    name: "Trang trại chăn nuôi heo Hòa Phát",
    location: "Tỉnh Yên Bái",
    category: "cong-nghiep",
    image: "/images/projects/trang-trai-hoa-phat.jpg",
    sourcePage: 18,
  },
  ...(
    [
      [1, 19],
      [2, 19],
      [3, 20],
      [4, 20],
      [5, 21],
    ] as const
  ).map(([n, page]) => ({
    id: `nha-dan-${n}`,
    name: "Công trình nhà dân tiêu biểu",
    location: "Tỉnh Yên Bái",
    category: "dan-dung" as const,
    image: `/images/projects/nha-dan-0${n}.jpg`,
    sourcePage: page,
  })),
];

export const projectListGroups: ProjectListGroup[] = [
  {
    category: "hanh-chinh",
    title: "Nhà nước – Hành chính",
    items: [
      "Ủy ban: Nam Cường, Hợp Minh, Việt Cường, Cổ Phúc, Việt Thành, Kiên Thành",
      "Nhà Công an xã Âu Lâu",
      "Nhà văn hóa: Cửa Ngòi, Cống Đá, Thanh Giang, Đồng Chuối, Hợp Minh",
    ],
  },
  {
    category: "giao-duc",
    title: "Giáo dục – Đào tạo",
    items: [
      "Trường học: Minh Bảo, Yên Thịnh, Yên Phú, Nguyễn Thái Học",
      "Các trường: Hoa Ban, Hoa Lan, Yên Ninh, Hồng Thái, Kim Đồng",
      "Trường: Tân Hợp, Hòa Cuông, Y Can, Mỏ Vàng, Nội Trú, Hoa Hồng",
      "Trường Nghiệp vụ Agribank Km6",
    ],
  },
  {
    category: "ha-tang",
    title: "Hạ tầng – Giao thông – Thủy lợi",
    items: [
      "Công trình đường: Yên Ninh, Cao Thắng",
      "Cầu Vực Tròn",
      "Cống Quy Mông",
      "Hồ thủy lợi tự do xã Y Can",
    ],
  },
  {
    category: "thuong-mai",
    title: "Dịch vụ – Thương mại",
    items: ["Trạm sạc VinFast – Bến xe Yên Bái"],
  },
  {
    category: "y-te",
    title: "Y tế – Công cộng",
    items: ["Trạm Kiểm lâm Phúc Lộc", "Trạm Y tế Yên Ninh"],
  },
  {
    category: "cong-nghiep",
    title: "Công nghiệp – Doanh nghiệp",
    items: [
      "Công ty Thủy Tinh – KCN Âu Lâu",
      "Công ty Thủy Ngân Hợp Minh",
      "Nhà máy: Quế, Giấy, May Chiến Thắng",
      "Nhà máy gỗ Nguyên Hồng",
      "Nhà máy giấy Kiệt Lâm",
      "Trại lợn An Nam",
    ],
  },
  {
    category: "ton-giao",
    title: "Tôn giáo – Văn hóa",
    items: ["Đình Kiên Lao", "Chùa Y Can", "Đền Bà áo đỏ", "Đền Bà áo trắng"],
  },
];
