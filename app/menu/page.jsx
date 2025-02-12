import MenuCard from "../components/ui/MenuCard";
import { menulist } from "../data/menulist";
import MenuCategory from "../components/MenuCategory";

const MenuPage = () => {
  return (
    <div>
      {/* <div className="flex items-center justify-center mt-4">
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
        <h1 className="text-2xl font-dancing font-bold text-yellow-500 text-center text-nowrap mx-2">
          Complete Menu
        </h1>
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
      </div> */}

      {menulist.map((menu) => (
        <MenuCategory props={menu} />
      ))}

      <div className="flex items-center justify-center mt-4">
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
        <h1 className="text-2xl font-dancing font-bold text-yellow-500 text-center text-nowrap mx-2">
          Other Products
        </h1>
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
      </div>
      <h1 className="text-center font-bold text-3xl lg:text-4xl text-zinc-600 lg:mt-4">
        Products From Our Trusted Partners
      </h1>
    </div>
  );
};

export default MenuPage;
