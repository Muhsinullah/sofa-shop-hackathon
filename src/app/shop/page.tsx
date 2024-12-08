import Features from '../components/Features';
import Navbar from '../components/Navbar';
import NavSection from '../components/Banner';
import ProductCard from '../components/ProductCard';

const products = [
  { title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', imageUrl: '/product1.png' },
  { title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', imageUrl: '/product2.png' },
  { title: 'Outdoor Bar Table', price: 'Rs. 25,000.00', imageUrl: '/product3.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product4.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product5.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product6.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product7.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product8.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product9.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product10.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product11.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product12.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product13.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product14.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product15.png' },
  { title: 'Plain Console', price: 'Rs. 258,800.00', imageUrl: '/product16.png' },
  // Add more products...
];

const Shop = () => {
  return (
    <>
    <div className='h-[100px]'>
    <Navbar />
    </div>

    <NavSection/>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between my-6">
          <div className="flex gap-2">
            <button className="p-2 border rounded-md">Filter</button>
            <button className="p-2 border rounded-md">Grid</button>
          </div>
          <p>Showing 1–16 of 32 results</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        <div className="flex justify-center text-[16px] mt-8 mb-20 gap-x-7">
          <button className="py-2 px-4  bg-[#FBEBB5] rounded-md ">1</button>
          <button className="py-2 px-4  bg-[#FFF9E5] bg-yellow rounded-md">2</button>
          <button className="py-2 px-4  bg-[#FFF9E5] bg-yellow rounded-md">3</button>
          <button className="py-2 px-4  bg-[#FFF9E5] bg-yellow rounded-md">Next</button>
        </div>
      </div>
      <Features/>
    </>
  );
};

export default Shop;
