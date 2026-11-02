// Danh mục sản phẩm — PDF pp.8–10. No pricing is published; all items are quote-on-request.
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: { src: string; alt: string };
}

export const productCategories: ProductCategory[] = [
  {
    id: "xi-mang",
    name: "Xi măng",
    description: "Tân Quang, Yên Bình, Chinfon, Hoàng Thạch",
    image: { src: "/images/products/xi-mang.jpg", alt: "Các bao xi măng PCB30, PCB40" },
  },
  {
    id: "sat-thep",
    name: "Sắt thép",
    description: "Sắt cây, thép hộp: Hòa Phát, Việt Đức, Việt Mỹ, Tisco",
    image: { src: "/images/products/sat-thep.jpg", alt: "Thép hộp xếp trong kho" },
  },
  {
    id: "cat-da",
    name: "Cát và đá xây dựng",
    description: "Cát xây, cát san lấp, đá các loại",
    image: { src: "/images/products/cat-da.jpg", alt: "Bãi cát xây dựng" },
  },
  {
    id: "gach-xay-dung",
    name: "Gạch xây dựng",
    description: "Gạch nung từ HACECO, Yên Bình, Xuân Lan, Việt Pháp, Sông Hồng",
    image: {
      src: "/images/products/gach-xay-dung.jpg",
      alt: "Bốc xếp gạch nung bằng xe nâng tại kho",
    },
  },
  {
    id: "gach-op-lat",
    name: "Gạch ốp lát",
    description: "Đa dạng mẫu mã cho nội, ngoại thất",
    image: { src: "/images/products/gach-op-lat.jpg", alt: "Kho gạch ốp lát" },
  },
  {
    id: "thiet-bi-ve-sinh",
    name: "Thiết bị vệ sinh",
    description: "Viglacera, Inax, Toto, Caesar, Kohler…",
    image: { src: "/images/products/thiet-bi-ve-sinh.jpg", alt: "Showroom thiết bị vệ sinh" },
  },
  {
    id: "son-chong-tham",
    name: "Sơn và chống thấm",
    description: "Dulux, Jotun, Kova, Nippon, Mykolor…",
    image: { src: "/images/products/son-chong-tham.jpg", alt: "Kệ sơn và vật liệu chống thấm" },
  },
  {
    id: "ong-nuoc",
    name: "Ống nước và phụ kiện",
    description: "PVC, HDPE, PPR: Tiền Phong, Bình Minh, Hoa Sen…",
    image: { src: "/images/products/ong-nuoc.jpg", alt: "Ống nhựa xếp trên giá" },
  },
  {
    id: "thiet-bi-dien",
    name: "Thiết bị điện",
    description: "Cùng téc nước, bình nóng lạnh, hệ thống năng lượng mặt trời",
    image: {
      src: "/images/products/thiet-bi-hoan-thien.jpg",
      alt: "Thiết bị điện, bồn nước và vật tư hoàn thiện",
    },
  },
  {
    id: "gach-khong-nung-cong",
    name: "Gạch không nung và cống bê tông",
    description: "Sản xuất trực tiếp tại nhà máy của doanh nghiệp",
    image: {
      src: "/images/products/gach-khong-nung-cong-be-tong.jpg",
      alt: "Gạch không nung và cống bê tông",
    },
  },
];
