
import Image from "next/image";
import { Billboard } from "@/types";

interface BillboardCardProps {
  data: Billboard;
}

const BillboardCard: React.FC<BillboardCardProps> = ({ data }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <Image
        src={data.imageUrl}
        alt={data.label}
        width={600}
        height={400}
        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <p className="text-lg font-bold">{data.label}</p>
      </div>
    </div>
  );
};

export default BillboardCard;
