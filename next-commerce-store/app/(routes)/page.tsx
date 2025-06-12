import getBillboards from "@/actions/get-billboards";
import BillboardCard from "@/components/ui/billboard-card";
import getProducts from "@/actions/get-products";
import InfoSection from "@/components/Infosection";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/Herosection";
import DummyProductPage from "@/components/DummyProduct";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards();

  return (
    <div className="w-full overflow-hidden bg-slate-50">
      <HeroSection />
      <Container>
        <div className="space-y-10 pb-10">
          <div className="">
            <div className="relative z-20 mt-10 md:mt-20 px-6 flex flex-col items-center mx-auto max-w-4xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Shop by Category
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-prose mx-auto mb-8 leading-relaxed">
                Carefully curated picks from our best-loved essentials.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
              {billboards.slice(0, 6).map((billboard) => (
                <BillboardCard key={billboard.id} data={billboard} />
              ))}
            </div>
          </div>
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container>
      <DummyProductPage />
      <WhyChooseUs />
      <InfoSection />
    </div>
  );
};

export default HomePage;
