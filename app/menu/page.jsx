import MenuCard from "../components/ui/MenuCard";
import food1 from "@/public/foodgroup1.jpg";
import food2 from "@/public/foodgroup2.jpg";

const menuItems = [
  {
    id: 1,
    name: "Spaghetti",
    image: food1,
    price: { SM: 8.99, MD: 10.99, LG: 12.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 2,
    name: "Kaldereta",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 3,
    name: "Menudo",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 4,
    name: "Sinigang",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 5,
    name: "Sisig",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 6,
    name: "Afritada",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 7,
    name: "Adobo",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 8,
    name: "Bistek",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 9,
    name: "Bopis",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 10,
    name: "Pakbet",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 11,
    name: "Chopsuey",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
  {
    id: 12,
    name: "Tortang Talong",
    image: food2,
    price: { SM: 9.99, MD: 11.99, LG: 13.99 },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
  },
];

const MenuPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
        <h1 className="text-2xl font-dancing font-bold text-yellow-500 text-center text-nowrap mx-2">
          Menu
        </h1>
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
      </div>
      <h1 className="text-center font-bold text-3xl lg:text-4xl text-zinc-600 lg:mt-4">
        Complete List of Menu
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 auto-rows-auto p-4 lg:p-16 py-8 gap-2 lg:gap-6">
        {menuItems.map((item) => (
          <MenuCard props={item} />
        ))}
      </div>

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
