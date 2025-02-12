import food1 from "@/public/foodgroup1.jpg";
import food2 from "@/public/foodgroup2.jpg";

export const chickenmenu = {
  title: "Chicken Dishes",
  sizes: [
    { size: "SM", price: "12.50" },
    { size: "MD", price: "14.50" },
    { size: "LG", price: "16.50" },
  ],
  menulist: [
    {
      id: 1,
      name: "Afritada",
      image: food1,
      sizes: [
        { size: "SM", price: "12.50" },
        { size: "MD", price: "14.50" },
        { size: "LG", price: "16.50" },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
    },
    {
      id: 2,
      name: "Adobo",
      image: food2,
      sizes: [
        { size: "SM", price: "12.50" },
        { size: "MD", price: "14.50" },
        { size: "LG", price: "16.50" },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
    },
    {
      id: 3,
      name: "Inasal (Quarter Leg)",
      image: food2,
      sizes: [
        { size: "", price: "6.75" },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit consequuntur laborum iste, harum exercitationem dolore sed distinctio assumenda voluptatum!",
    },
  ],
};
