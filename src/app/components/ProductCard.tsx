interface ProductCardProps {
    title: string;
    price: string;
    imageUrl: string;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
    return (
      <div className=" rounded-md p-4 hover:shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="font-medium text-[14px] text-lg">{title}</h3>
        <p className="text-[#000000] font-poppins text-[24px]">{price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  