export interface SubItem {
  name: string;
  id: number;
  type?: string;
  placeholder?: string;
}
export interface Item {
  name: string;
  id: number;
  items: SubItem[];
}

export const HouseInfo: Item[] = [
  {
    name: "Basic Information",
    id: 1,
    items: [
      { name: "Address", id: 100, placeholder: "Enter Address" },
      {
        name: "Register number",
        id: 101,
        type: "numeric",
        placeholder: "Enter Registration number",
      },
      {
        name: "Year Built",
        id: 102,
        type: "numeric",
        placeholder: "Enter year built",
      },
      {
        name: "Square Meters",
        id: 103,
        type: "numeric",
        placeholder: "Enter Square meters",
      },
      {
        name: "Building Material",
        id: 104,
        placeholder: "Enter Building material",
      },
      { name: "Roof Material", id: 105, placeholder: "Enter Roof Material" },
      { name: "Heating", id: 106, placeholder: "Enter Heating solutions" },
      {
        name: "Garage",
        id: 107,
        placeholder: "Enter Garage and size in Square meters",
      },
    ],
  },
  {
    name: "Household Appliances",
    id: 2,
    items: [
      {
        name: "Fridge",
        id: 200,
        placeholder: "Enter Model / Name / year bought",
      },
      {
        name: "Freezer",
        id: 201,
        placeholder: "Enter Model / Name / year bought",
      },
      {
        name: "Oven",
        id: 202,
        placeholder: "Enter Model / Name / year bought",
      },
      {
        name: "Microwave",
        id: 203,
        placeholder: "Enter Model / Name / year bought",
      },
      {
        name: "Washing Machine",
        id: 204,
        placeholder: "Enter Model / Name / year bought",
      },
      {
        name: "Dryer",
        id: 205,
        placeholder: "Enter Model / Name / year bought",
      },
      {
        name: "Vacum/Hoover",
        id: 206,
        placeholder: "Enter Model / Name / year bought",
      },
    ],
  },
  {
    name: "Service Needs",
    id: 3,
    items: [
      {
        name: "Gutters",
        id: 300,
        placeholder: "Enter last cleaned / changed",
      },
      {
        name: "Air Filters",
        id: 301,
        placeholder: "Enter last cleaned / changed",
      },
      {
        name: "Chimney Sweeping",
        id: 302,
        placeholder: "Enter last cleaned / changed",
      },
    ],
  },
  {
    name: "On Going Costs",
    id: 4,
    items: [
      {
        name: "Water",
        id: 400,
        type: "numeric",
        placeholder: "Enter estimated per month",
      },
      {
        name: "Electricity",
        id: 401,
        type: "numeric",
        placeholder: "Enter estimated per month",
      },
      {
        name: "Trash",
        id: 402,
        type: "numeric",
        placeholder: "Enter estimated per month",
      },
      {
        name: "Insurances",
        id: 403,
        type: "numeric",
        placeholder: "Enter estimated per month",
      },
    ],
  },
];
