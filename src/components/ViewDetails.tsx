import React from "react";
import { View, Text } from "react-native";
import { DetailsStyles } from "../styles";

interface ViewDetailsProps {
  houseDetails: {
    [houseName: string]: HouseDetail;
  };
}

interface HouseDetail {
  [key: string]: string | number | Object;
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ houseDetails }) => {
  console.log(houseDetails);
  return (
    <View>
      {Object.entries(houseDetails).map(([houseName, details]) => (
        <View key={houseName} style={DetailsStyles.detailsContainer}>
          <Text style={DetailsStyles.houseName}>{houseName}</Text>
          {Object.entries(details).map(([key, value]) => (
            <View key={key} style={DetailsStyles.detailRow}>
              <Text style={DetailsStyles.label}>{key}: </Text>
              <Text style={DetailsStyles.value}>
                {typeof value === "string" || typeof value === "number"
                  ? value.toString()
                  : typeof value === "object"
                    ? JSON.stringify(value)
                    : "N/A"}
              </Text>
            </View>
          ))}
        </View>
      ))}

      {/* {Object.entries(houseDetails).map(([key, value]) => (
        <View key={key}>
          <Text>
            {key}: {typeof value === "string" ? value : "N/A"}
          </Text>
        </View>
      ))} */}
    </View>
  );
};

export default ViewDetails;
