
export const selectableData = { // Redundant?
    basicInformation: [
        { label: "Address", value: "Address"},
        { label: "Register Number", value: "Register Number"},
        { label: "Year Built", value: "Year Build"},
        { label: "Square Meters", value: "Square Meters"},
        { label: "Building material", value: "Building material"},
        { label: "Roof Material/Construction", value: "Roof Material/Construction"},
        { label: "Heating", value: "Heating"},
        { label: "Garage", value: "Garage"},

    ],
    houseHoldAppliances: [
        { label: "Fridge", value: "Fridge"},
        { label: "Freezer", value: "Freezer"},
        { label: "Oven", value: "Oven"},
        { label: "Microwave", value: "Microwave"},
        { label: "Washing Machine", value: "Washing Machine"},
        { label: "Washing Machine", value: "Washing Machine"},
        { label: "Dryer", value: "Dryer"},
        { label: "Vacum/Hoover", value: "Vacum/Hoover"},
        { label: "Vacum/Hoover", value: "Vacum/Hoover"},
        // Add more when needed, implement custom items
    ],
    serviceNeeds: [
        { label: "Gutters", value: "Gutters"},
        { label: "Vacum/Hoover", value: "Vacum/Hoover"},
        { label: "Air Filters", value: "Air Filters"},
        { label: "Chimney Sweeping", value: "Chimney Sweeping"},
    ],
    onGoingCosts: [
        { label: "Water", value: "Water"},
        { label: "Electricity", value: "Electricity"},
        { label: "Trash?", value: "Trash?"},
        { label: "Insurances", value: "Insurances"},

    ]
}
 

export interface SubItem {
    name: string
    id: number
}
export interface Item {
    name: string
    id: number
    items: SubItem[]
}

export const items: Item[] = [
    { name: "Basic Information", id: 1,
        items: [
            { name: "Address", id: 100 },
            { name: "Register Number", id: 101 },
            { name: "Year Built", id: 102 },
            { name: "Square Meters", id: 103 },
            { name: "Building Material", id: 104 },
            { name: "Roof Material/Construction", id: 105 },
            { name: "Heating", id: 106 },
            { name: "Garage", id: 107 },
            
        ]
    },
    { name: "Household Appliances", id: 2,
        items: [
            { name: "Fridge", id: 200 },
            { name: "Freezer", id: 201 },
            { name: "Oven", id: 202 },
            { name: "Microwave", id: 203 },
            { name: "Washing Machine", id: 204 },
            { name: "Dryer", id: 205 },
            { name: "Vacum/Hoover", id: 206 },

        ]
    },
    { name: "Service Needs", id: 3, 
        items: [
            { name: "Gutters", id: 300 },
            { name: "Air Filters", id: 301 },
            { name: "Chimney Sweeping", id: 302 },

        ]
    },
    { name: "On Going Costs", id: 4, 
        items: [
            { name: "Water", id: 400 },
            { name: "Electricity", id: 401 },
            { name: "Trash", id: 402 },
            { name: "Insurances", id: 403 },

        ]
    }
]

