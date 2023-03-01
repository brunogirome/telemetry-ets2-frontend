import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

import axios from "axios";

import { io } from "socket.io-client";

const socket = io("http://192.168.0.118:3001");

socket.connect();

const api = axios.create({
  baseURL: "http://192.168.0.118:3001",
});

export default function App() {
  const [speed, setSpeed] = useState(0);

  const [hazarLightColor, setHazarLightColor] = useState("#000");

  const [differentialLightColor, setDifferentialLightColor] = useState("#000");

  const hazardButton = useCallback(() => {
    socket.emit("ingame_command", "F");
  }, []);

  const differentialButton = useCallback(() => {
    socket.emit("ingame_command", "V");
  }, []);

  useEffect(() => {
    socket.on("speed_monitoring", (speed) => {
      setSpeed(speed);
    });

    socket.on("status_hazard_light", (status) => {
      setHazarLightColor(status ? "#e3242b" : "#000");
    });

    socket.on("differential_status", (status) => {
      setDifferentialLightColor(status ? "#ffab44" : "#000");
    });
  }, [socket]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 14, color: "#333" }}>{`${speed} Kph`}</Text>
      <Button
        color={hazarLightColor}
        title="Hazard button"
        onPress={hazardButton}
      />
      <Button
        color={differentialLightColor}
        title="Differntial button"
        onPress={differentialButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIo: {
    marginTop: 10,
  },
});
