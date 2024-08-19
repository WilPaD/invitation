import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "XV Años - Juan Roberto",
  metadataBase: new URL("https://padga.dev"),
  openGraph: {
    description: "Invitación digital de la celebración",
    images: ["/img/xv6-r.jpg"],
  },
  icons: ["/img/xv6-r.jpg"],
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
