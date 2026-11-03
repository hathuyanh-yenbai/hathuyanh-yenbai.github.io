// Lĩnh vực hoạt động — PDF pp.8–9
export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  items: string[];
  image: { src: string; alt: string };
  highlight?: string;
}

export const services: Service[] = [
  {
    id: "cung-ung-vat-lieu",
    index: "01",
    title: "Cung ứng vật liệu xây dựng",
    description:
      "Đa dạng vật liệu thô cho công trình dân dụng và công nghiệp, nguồn hàng ổn định, cung ứng linh hoạt theo tiến độ thi công.",
    items: [
      "Xi măng",
      "Cát xây dựng", 
      "Cát san lấp",
      "Đá xây dựng",
      "Sắt thép xây dựng",
      "Gạch nung",
      "Gạch không nung",
    ],
    image: {
      src: "/images/services/cat-da-xay-dung.jpg",
      alt: "Bãi tập kết cát và đá xây dựng",
    },
  },
  {
    id: "vat-tu-hoan-thien",
    index: "02",
    title: "Thiết bị và vật tư hoàn thiện",
    description:
      "Phân phối gạch ốp lát, thiết bị vệ sinh, thiết bị điện, ống nước, sơn từ các thương hiệu uy tín, mẫu mã đa dạng cho mọi loại công trình.",
    items: [
      "Gạch ốp lát",
      "Ngói lợp, tôn lợp",
      "Thiết bị vệ sinh",
      "Sơn nhà, chống thấm",
      "Thiết bị điện",
      "Ống nước và phụ kiện",
      "Téc nước, bồn nước",
      "Bình nóng lạnh",
      "Hệ thống năng lượng mặt trời",
    ],
    image: {
      src: "/images/services/kho-gach-op-lat.jpg",
      alt: "Kho gạch ốp lát xếp theo pallet",
    },
  },
  {
    id: "san-xuat-be-tong",
    index: "03",
    title: "Sản xuất vật liệu bê tông",
    description:
      "Trực tiếp sản xuất gạch không nung và cống bê tông tại nhà máy của doanh nghiệp bằng dây chuyền ép thủy lực — vật liệu thân thiện môi trường, cường độ chịu lực cao.",
    items: ["Gạch không nung", "Cống bê tông"],
    image: {
      src: "/images/services/bai-gach-khong-nung.jpg",
      alt: "Bãi thành phẩm gạch không nung của doanh nghiệp",
    },
    highlight: "Sản xuất trực tiếp",
  },
];
