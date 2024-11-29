export interface HouseDetail {
  [key: string]: string | number | Object;
}

export interface CategorizedDetails {
  [category: string]: {
    [key: string]: string | number | Object;
  };
}

export interface ViewDetailsProps {
  houseDetails: {
    [houseName: string]: HouseDetail;
  };
}

export interface EditDetailsProps {
  houseDetails: {
    [houseName: string]: HouseDetail;
  };
  onSave?: () => void;
}
