//import getBillboard from "@/actions/get-billboard";
// import Billboard from "@/components/ui/billboard";
import getProducts from "@/actions/get-products";
import InfoSection from "@/components/Infosection";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import WhyChooseUs from "@/components/WhyChooseUs";

// export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  //const billboard = await getBillboard("0e12e5cf-29ab-4529-b8d5-c5371dae1f7b");
  

  return (
    <div className="w-full overflow-hidden">
      <Container>
        <div className="space-y-10 pb-10">
          {/* <Billboard 
          data={billboard}
        /> */}
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
      <WhyChooseUs />
      <InfoSection />
    </div>
  );
};

export default HomePage;
