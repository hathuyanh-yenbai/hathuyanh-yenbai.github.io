// Năng lực cung ứng — PDF p.10
export interface CapabilityMetric {
  label: string;
  value: number;
  unit: string;
  note?: string;
}

export const capabilityMetrics: CapabilityMetric[] = [
  { label: "Xi măng", value: 200, unit: "tấn/ngày" },
  { label: "Thép xây dựng", value: 100, unit: "tấn/ngày" },
  { label: "Cát, đá", value: 400, unit: "m³/ngày" },
  { label: "Gạch không nung", value: 60000, unit: "viên/ngày" },
  { label: "Tổng diện tích kho", value: 20000, unit: "m²" },
  { label: "Đội xe", value: 10, unit: "xe", note: "Xe tải, xe nâng, xe cẩu đa chủng loại" },
];

export const capabilityPoints = [
  {
    title: "Nguồn cung vật liệu",
    description:
      "Xi măng nhập trực tiếp từ các nhà máy như Tân Quang, Yên Bình, Chinfon, Hoàng Thạch; thép Hòa Phát, Việt Đức, Việt Mỹ, Tisco; cát, đá từ các mỏ trong khu vực.",
  },
  {
    title: "Hệ thống kho bãi",
    description:
      "20.000 m² kho bãi đáp ứng lưu trữ và cung ứng số lượng lớn liên tục; hàng hóa được sắp xếp, phân loại khoa học.",
  },
  {
    title: "Năng lực vận chuyển",
    description:
      "Đội xe tải, xe nâng, xe cẩu đáp ứng linh hoạt từ đơn hàng nhỏ đến khối lượng lớn, giao hàng đúng tiến độ công trình.",
  },
  {
    title: "Phục vụ nhiều dự án",
    description:
      "Khả năng cung ứng ổn định, đồng thời cho nhiều công trình, hạn chế gián đoạn tiến độ thi công.",
  },
];
