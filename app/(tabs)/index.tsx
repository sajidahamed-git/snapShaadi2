import React, { useState } from "react";

import { CameraView, useCameraPermissions } from "expo-camera";

import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons";
export default function HomeScreen() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleCameraPress = async () => {
    if (cameraPermission?.granted) {
      setIsCameraOpen(true);
    } else {
      const permission = await requestCameraPermission();
      if (permission.granted) {
        setIsCameraOpen(true);
      }
    }
  };

  if (isCameraOpen) {
    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing="back">
          <View style={styles.buttonContainer}></View>
        </CameraView>
      </View>
    );
  }
  return (
    // If camera permission is granted, show the camera view
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        style={styles.reactLogo}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Snap Shaadi</ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <FontAwesome.Button
          name="camera"
          style={styles.button}
          onPress={handleCameraPress}
        >
          Open Camera
        </FontAwesome.Button>
        <FontAwesome.Button name="image" style={styles.button}>
          Open Gallery
        </FontAwesome.Button>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  reactLogo: {
    minHeight: "50%",
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  buttonContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8,
    alignItems: "center",
  },
  button: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
