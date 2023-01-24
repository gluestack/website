import React from "react";
import { AppProvider } from "@gluestack/design-system";
import { View } from "react-native";
export const Wrapper = ({ children, colorMode }: any) => {
  return (
    <AppProvider colorMode={colorMode}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {children}
      </View>
    </AppProvider>
  );
};
