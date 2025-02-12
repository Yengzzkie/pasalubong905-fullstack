import { menulist } from "../data/menulist";

import foodGroup1 from "@/public/foodgroup1.jpg";

const itemsData = [
  {
    productName: "Sinigang",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "4.99",
    img: foodGroup1.src,
  },
  {
    productName: "Adobo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "5.99",
    img: foodGroup1.src,
  },
  {
    productName: "Nilagang Baka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "2.99",
    img: foodGroup1.src,
  },
  {
    productName: "Dinakdakan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "7.99",
    img: foodGroup1.src,
  },
  {
    productName: "Menudo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "9.99",
    img: foodGroup1.src,
  },
  {
    productName: "Dinakdakan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "7.99",
    img: foodGroup1.src,
  },
  {
    productName: "Sisig",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "10.99",
    img: foodGroup1.src,
  },
  {
    productName: "Kaldereta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut pariatur! Repudiandae officiis adipisci ipsa.",
    price: "12.99",
    img: foodGroup1.src,
  },
];

const Menu = () => {
  return (
    <div className="h-auto border py-10 lg:px-24">
      <div className="flex items-center justify-center">
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
        <h1 className="text-2xl font-dancing font-bold text-yellow-500 text-center text-nowrap mx-2">
          Food Menu
        </h1>
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
      </div>

      <h1 className="text-4xl text-zinc-600 font-extrabold text-center m-4">
        Most Popular Items
      </h1>

      <div className="lg:grid grid-cols-2 auto-rows-auto gap-8 bg-yellow-100/50 shadow-md h-auto w-[90%] lg:w-[80%] mx-auto p-4 lg:p-8 items-start mt-10">
        {itemsData.map((item, index) => (
          <div key={index} className="flex items-center text-zinc-600 mb-10 lg:mb-0">
            {/* <div className="w-16 h-full flex-shrink-0">
              <img className="w-full h-full object-cover" src={item.img} alt={item.productName} />
            </div> */}

            <div className="flex flex-col mx-3 lg:mx-4">
              <div className="flex w-full border-b-[1px] border-zinc-400 py-1 h-fit">
                <h1 className="font-bold text-xl">{item.productName}</h1>
                <span className="text-lg font-bold text-yellow-600 ml-auto">
                  ${item.price}
                </span>
              </div>
              <div className="py-1">
                <p className="text-xs lg:text-sm text-zinc-500 italic">{item.description}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
