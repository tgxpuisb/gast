import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import theme from "@/theme/themeConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "贵州省科学技术协会",
  description: "贵州省科学技术协会是全省科学技术工作者的群众组织，是中共贵州省委领导下的人民团体，是党和政府联系科学技术工作者的桥梁和纽带，是推动科学技术事业发展的重要力量。贵州省科学技术协会是中国科学技术协会的地方组织，接受中国科学技术协会的业务指导;是中国人民政治协商会议贵州省委员会的参加单位。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={theme}>
          {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
