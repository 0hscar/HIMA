import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { DetailsStyles, screenStyles } from "../styles";
import { HouseInfo } from "houseInfoSelection";
import {
  ViewDetailsProps,
  HouseDetail,
  CategorizedDetails,
} from "types/component";

const ViewDetails: React.FC<ViewDetailsProps> = ({ houseDetails }) => {
  const organizeByCategory = (details: HouseDetail): CategorizedDetails => {
    const categorized: CategorizedDetails = {};

    HouseInfo.forEach((category) => {
      const categoryDetails: { [key: string]: any } = {};

      category.items.forEach((item) => {
        const detailKey = Object.keys(details).find(
          (key) => key.toLowerCase() === item.name.toLowerCase(),
        );

        if (detailKey && details[detailKey] !== undefined) {
          categoryDetails[detailKey] = details[detailKey];
        }
      });

      if (Object.keys(categoryDetails).length > 0) {
        categorized[category.name] = categoryDetails;
      }
    });

    const mappedFields = HouseInfo.flatMap((category) =>
      category.items.map((item) => item.name.toLowerCase()),
    );

    const otherFields = Object.entries(details).filter(
      ([key]) => !mappedFields.includes(key.toLowerCase()),
    );

    if (otherFields.length > 0) {
      categorized["Other"] = Object.fromEntries(otherFields);
    }

    return categorized;
  };

  return (
    <View>
      {Object.entries(houseDetails).map(([houseName, details]) => {
        const categorizedDetails = organizeByCategory(details);

        return (
          <View key={houseName} style={DetailsStyles.detailsContainer}>
            <Text style={DetailsStyles.houseName}>{houseName}</Text>

            {Object.entries(categorizedDetails).map(
              ([category, categoryDetails]) => (
                <View key={category} style={DetailsStyles.categoryContainer}>
                  <Text style={DetailsStyles.categoryLabel}>{category}</Text>

                  {Object.entries(categoryDetails as Record<string, any>)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([key, value]) => (
                      <View key={key} style={DetailsStyles.detailRow}>
                        <Text style={DetailsStyles.detailLabel}>{key}: </Text>
                        <Text style={DetailsStyles.value}>
                          {typeof value === "string" ||
                          typeof value === "number"
                            ? value.toString()
                            : typeof value === "object"
                              ? JSON.stringify(value)
                              : "N/A"}
                        </Text>
                      </View>
                    ))}
                </View>
              ),
            )}
          </View>
        );
      })}
    </View>
  );
};

export default ViewDetails;
