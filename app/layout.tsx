import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Евгения Даныева — маркетинг, AI и практические решения",
  description:
    "Практические консультации, персональная настройка нейросетей, сайты, AI-видимость, авторский метод «Зебра в клеточку», маркетинговые проекты и лекции-практикумы.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Евгения Даныева — приходите с задачей, уходите с решением",
    description:
      "Маркетинг, продажи и AI без теории ради теории. Конкретные продукты, понятные цены и работа непосредственно над вашей задачей.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#130b18",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
