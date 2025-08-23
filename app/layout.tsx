import '@/app/ui/global.css';
import { inter, ubuntu } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
      <body className={`${ubuntu.className} antialiased bg-gray-400 text-gray-900`} >{children}</body>
    </html>
  );
}
