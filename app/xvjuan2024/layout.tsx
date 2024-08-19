import type { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "XV Años - Juan Roberto",
  metadataBase: new URL("https://padga.dev"),
  openGraph: {
    description: "Invitación digital de la celebración",
  },
};

export default function XVJuanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://padga.dev/img/xv6-r.jpg"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
