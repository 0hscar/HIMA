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
    name: "Location and building information",
    id: 10,
    items: [
      { name: "Address", id: 100, placeholder: "Enter Address" },
      {
        name: "Postcode",
        id: 101,
        placeholder: "Enter Postcode",
        type: "numeric",
      },
      {
        name: "Post Office / City",
        id: 102,
        placeholder: "Enter Post Office / City",
      },
      {
        name: "District / Village",
        id: 103,
        placeholder: "Enter District / Village",
      },
      {
        name: "Plot / Farm / Block number",
        id: 104,
        placeholder: "Enter Plot / Farm / Block number",
        type: "numeric",
      },
      {
        name: "Land Registry Number",
        id: 105,
        placeholder: "Enter Land Registry Number",
        type: "numeric",
      },
      {
        name: "Building Permit Date",
        id: 106,
        placeholder: "Enter Building Permit Date",
      },
      {
        name: "Final Inspection Date",
        id: 107,
        placeholder: "Enter Final Inspection Date",
      },
      {
        name: "Commissioning Date",
        id: 108,
        placeholder: "Enter Commissioning Date",
      },
    ],
  },
  {
    name: "Area and Volume Information",
    id: 11,
    items: [
      {
        name: "Floor area (m²)",
        id: 110,
        type: "numeric",
        placeholder: "Enter Floor Area (m²)",
      },
      {
        name: "Living area (m²)",
        id: 111,
        type: "numeric",
        placeholder: "Enter Living Area (m²)",
      },
      {
        name: "Total Volume (m³)",
        id: 112,
        type: "numeric",
        placeholder: "Enter Total Value (m³)",
      },
    ],
  },
  {
    name: "Space Information",
    id: 12,
    items: [
      {
        name: "Total Rooms (amount)",
        id: 120,
        type: "numeric",
        placeholder: "Enter Total Amount of Rooms",
      },
      {
        name: "Attic space (Heated, m²)",
        id: 121,
        type: "numeric",
        placeholder: "Enter Heated Attic space (m²)",
      },
      {
        name: "Attic space (Non-heated, m²)",
        id: 122,
        type: "numeric",
        placeholder: "Enter Non-heated Attic space (m²)",
      },
      {
        name: "Cellar space (Heated, m²)",
        id: 123,
        type: "numeric",
        placeholder: "Enter Heated Cellar space (m²)",
      },
      {
        name: "Cellar space (Non-heated, m²)",
        id: 124,
        type: "numeric",
        placeholder: "Enter Non-heated Cellar space (m²)",
      },
      {
        name: "Sauna space (m²)",
        id: 125,
        type: "numeric",
        placeholder: "Enter Sauna space(m²)",
      },
      {
        name: "Head Distribution Room (m²)",
        id: 126,
        type: "numeric",
        placeholder: "Enter Heat Distribution Room space(m²)",
      },
      {
        name: "Storage space (m²)",
        id: 127,
        type: "numeric",
        placeholder: "Enter Storage space(m²)",
      },
      {
        name: "Garage space (m²)",
        id: 128,
        type: "numeric",
        placeholder: "Enter Garage space(m²)",
      },
    ],
  },
  {
    name: "Plot Information",
    id: 13,
    items: [
      {
        name: "Plot area (m²)",
        id: 130,
        type: "numeric",
        placeholder: "Enter Plot area (m²)",
      },
    ],
  },
  {
    name: "Foundations",
    id: 14,
    items: [
      {
        name: "Foundations",
        id: 140,
        placeholder: "Enter foundation (Concrete base? Steel beams? etc...)",
        // Add checkboxes for the usual suspects + input field for "else"
      },
    ],
  },
  {
    name: "Frame",
    id: 15,
    items: [{ name: "Waiting for checkbox support!", id: 150 }],
  },
  {
    name: "Facades",
    id: 16,
    items: [{ name: "Waiting for checkbox support!", id: 160 }],
  },
  {
    name: "Roof",
    id: 17,
    items: [{ name: "Waiting for checkbox support!", id: 170 }],
  },
  {
    name: "House Technology",
    id: 18,
    items: [{ name: "Waiting for checkbox support!", id: 180 }],
  },
  {
    name: "Material Information",
    id: 19,
    items: [
      {
        name: "Water Pipes (Inside)",
        id: 190,
        placeholder: "Enter Water Pipe Material",
      },
      {
        name: "Water Pipes (On the plot)",
        id: 191,
        placeholder: "Enter Water Pipe Material",
      },
      {
        name: "Sewer Pipes (Inside)",
        id: 192,
        placeholder: "Enter Sewer Pipe Material",
      },
      {
        name: "Sewer Pipes (On the plot)",
        id: 193,
        placeholder: "Enter Sewer Pipe Material",
      },
    ],
  },
  {
    name: "Construction Contact Information",
    id: 20,
    items: [{ name: "Waiting Multi-input support!", id: 200 }],
  },
  {
    name: "Target values and operating schedules",
    id: 21,
    items: [{ name: "Waiting for checkbox support!", id: 210 }],
  },
];

// Figure out smart way to include Energy and water consumption (per month, last years values, goal)
// Service calendar, Forced on user in edit field?
// Correction diary
// Maintanance plan?
// Surface materials and surface treatment agents, inside and outside?
// Useful contacts?
//
