"use client"
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Name", "Contact", "Pickup Date", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    contact: "437-123-1235",
    pickup: "23/04/18",
  },
  {
    name: "Alexa Liras",
    contact:  "437-523-2352",
    pickup: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    contact: "416-523-2352",
    pickup: "19/09/17",
  },
  {
    name: "Michael Levi",
    contact: "Developer",
    pickup: "24/12/08",
  },
  {
    name: "Richard Gran",
    contact: "Manager",
    pickup: "04/10/21",
  },
];
 
export default function OrderTable() {
  return (
    <Card className="h-full w-screen overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-gray-300 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-black font-semibold"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, contact, pickup }, index) => (
            <tr key={name} className="even:bg-gray-100 hover:bg-[var(--primary-dark)] hover:text-black">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {contact}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {pickup}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}