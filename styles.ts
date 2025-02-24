import { ScrollView, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6ddff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    borderTopWidth: 20,
    marginBottom: 20,
  },
  scrollview: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    backgroundColor: "#b6ffcc",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  infocontainer: {
    alignContent: "center",
  },
  titulo: {
    fontSize: 24,
    alignSelf: "center",
    color: "#373737",
  },
});
