//camera.tsx
//location components/ui/camera.tsx

import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type cameraCloseButtonProps = {
  onPress: () => void;
};

export  function CloseButton({ onPress }: cameraCloseButtonProps) {
  return (
    <View style={styles.closeButtonContainer}>
      <FontAwesome.Button
        name="close"
        backgroundColor="transparent"
        color="#fff"
        onPress={() => onPress()}
      >
        Close
      </FontAwesome.Button>
    </View>
  );
}

export  function CaptureButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.captureButtonContainer}>
        <FontAwesome.Button
          name="camera"
          backgroundColor="#000"
          onPress={onPress}
        >
          Snap
        </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  captureButtonContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    zIndex: 10,
  },
    closeButtonContainer: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },

});