import MenuCard from "./ui/MenuCard";
import { porkmenu } from "../data/porkmenu";

const MenuCategory = ({ props }) => {
  console.log(props);
  return (
    <div className="h-auto border py-10 lg:px-24">
      <div className="flex items-center justify-center">
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
        <h1 className="text-2xl font-dancing font-bold text-yellow-500 text-center text-nowrap mx-2">
          {props.menu.title}
        </h1>
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
      </div>

      {/* <h1 className="text-4xl text-zinc-600 font-extrabold text-center m-4">
        {props.menu.title}
      </h1> */}
      <div className="flex flex-col items-center justify-center bg-yellow-100/50 shadow-md h-auto w-[90%] lg:w-[80%] mx-auto p-4 lg:p-8  mt-10">
        {/* <div className="flex gap-6 mb-4">
          {props?.menu?.sizes?.map((size) => (
            <div key={size.size}>
              <span className="text-center text-lg font-bold text-zinc-600">
                {size.size}:{" "}
              </span>
              <span className="text-center text-lg font-bold text-yellow-600">
                ${size.price}
              </span>
            </div>
          ))}
        </div> */}

        <div className="lg:grid grid-cols-2 auto-rows-auto gap-8 items-start ">
          {props?.menu?.menulist?.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center text-zinc-600 mb-5 lg:mb-0"
            >
              <div className="flex flex-col mx-3 lg:mx-4">
                <div className="flex items-center w-full border-b-[1px] border-zinc-400 py-1 h-fit">
                  <h1 className="font-bold text-[10px] lg:text-xl">{menu?.name}</h1>

                  <div className="flex gap-2 ml-auto">
                    {menu?.sizes?.map((size) => (
                      <div key={size.size}>
                        <span className="text-center text-[8px] lg:text-xs font-thin text-zinc-600">
                          {size.size}:{" "}
                        </span>
                        <span className="text-center text-[9px] lg:text-base font-semibold text-yellow-600">
                          ${size.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                </div>
                <div className="py-1">
                  <p className="text-xs lg:text-sm text-zinc-500 italic">
                    {menu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
