import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mis XV Años",
  metadataBase: new URL("https://padga.dev"),
  openGraph:{
	description: "Invitación digital de la celebración",
	images: ['/img/xv6.jpg'],
  },
  icons: ["/img/xv6.jpg"],
};

export default function XVJuanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}