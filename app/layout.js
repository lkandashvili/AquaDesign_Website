import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'AquaDesign Georgia - Custom Aquariums, Pools & Lakes',
  description: 'Premium aquarium, swimming pool, and natural lake design services across Georgia.',
  keywords: 'aquarium Georgia, swimming pool Tbilisi, lake design Georgia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}