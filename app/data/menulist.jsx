import { porkmenu } from "./porkmenu"
import { beefmenu } from "./beefmenu"
import { chickenmenu } from "./chickenmenu"
import { vegetablemenu } from "./vegetablemenu"

export const menulist = [
    {
        category: "pork",
        menu: porkmenu,
    },
    {
        category: "beef",
        menu: beefmenu,
    },
    {
        category: "chicken",
        menu: chickenmenu,
    },
    {
        category: "vegetable",
        menu: vegetablemenu,
    }
]