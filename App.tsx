import { ScrollView, ScrollViewComponent, View, Text } from 'react-native';
import { styles } from './styles';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy} from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';


  export default function App(){
    const mapRef = useRef<MapView>(null)
    const [location,setLocation] = useState<LocationObject | null>(null);

    async function requestLocationPermissions(){
      const { granted } = await requestForegroundPermissionsAsync();

      if(granted){
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);

        console.log("Localização atual: ", currentPosition)
      }
    }
    useEffect(() =>{
      requestLocationPermissions();
    },[]);
    useEffect(() =>{
      watchPositionAsync({
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1
      }, (response) => {
        console.log("Nova localização: ",response);
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords
        })
      });
    },[]);

    return(
      <View style={styles.container}>
        {
          location &&
          <MapView
          ref= {mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>

            <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.latitude,
            }}
            ></Marker>
          </MapView>
        }
        <ScrollView style={styles.scrollView}>
        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>Informações sobre o local</Text>
          <Text style={styles.descricao}>
            Aqui você pode adicionar mais detalhes sobre o local, como descrições, horários de funcionamento, etc.
          </Text>
          <Text style={styles.descricao}>
            
          </Text>
          <Text style={styles.descricao}>
           
          </Text>
        </View>
      </ScrollView>
    </View>      
        );
  }