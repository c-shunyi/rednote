import Header from '../components/header';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      {children}
    </div>
  );
}
