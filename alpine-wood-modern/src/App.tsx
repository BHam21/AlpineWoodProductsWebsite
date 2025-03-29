import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ShowroomPage } from '@/pages/ShowroomPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ManufacturingPage } from '@/pages/ManufacturingPage';
import { TeamPage } from '@/pages/TeamPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { ContactPage } from '@/pages/ContactPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';

// Internal product pages
import { KitchensPage } from '@/pages/products/KitchensPage';
import { CommercialPage } from '@/pages/products/CommercialPage';
import { DoorsPage } from '@/pages/products/DoorsPage';
import { MouldingsPage } from '@/pages/products/MouldingsPage';
import { VanitiesPage } from '@/pages/products/VanitiesPage';
import { OfficePage } from '@/pages/products/OfficePage';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Main navigation pages */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Product category pages */}
          <Route path="/products/kitchens" element={<KitchensPage />} />
          <Route path="/products/commercial" element={<CommercialPage />} />
          <Route path="/products/doors" element={<DoorsPage />} />
          <Route path="/products/mouldings" element={<MouldingsPage />} />
          <Route path="/products/vanities" element={<VanitiesPage />} />
          <Route path="/products/office" element={<OfficePage />} />

          {/* Product detail page */}
          <Route path="/products/:productId" element={<ProductDetailPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
