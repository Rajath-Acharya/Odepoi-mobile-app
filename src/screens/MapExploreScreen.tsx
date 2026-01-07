// For now, we are not using this screen

// import React, { useEffect, useState, useRef } from 'react';
// import {
//   StyleSheet,
//   View,
//   Platform,
//   PermissionsAndroid,
//   Alert,
//   ActivityIndicator,
//   Button,
//   Text,
// } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { getDistance } from 'geolib';

// export default function MapExploreScreen() {
//   const [location, setLocation] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [source, setSource] = useState<any>(null);
//   const [destination, setDestination] = useState<any>(null);
//   const [isChoosingSource, setIsChoosingSource] = useState(false);
//   const [isChoosingDestination, setIsChoosingDestination] = useState(false);
//   const mapRef = useRef(null);

//   const defaultLocation = {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   } as any;

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       position => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         });
//         setLoading(false);
//       },
//       error => {
//         Alert.alert(
//           'Error',
//           `Failed to get your location: ${error.message}` +
//             ' Make sure your location is enabled.',
//         );
//         setLocation(defaultLocation);
//         setLoading(false);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 10000,
//       },
//     );
//   };

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       if (Platform.OS === 'android') {
//         try {
//           // Check if permission is already granted
//           const hasPermission = await PermissionsAndroid.check(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           );

//           if (hasPermission) {
//             getCurrentLocation();
//             return;
//           }

//           // Request permission if not granted
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           );

//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             getCurrentLocation();
//           } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
//             Alert.alert(
//               'Permission Denied',
//               'Location permission is required to show your current location on the map.',
//             );
//             setLocation(defaultLocation);
//             setLoading(false);
//           } else {
//             setLocation(defaultLocation);
//             setLoading(false);
//           }
//         } catch (err) {
//           console.warn(err);
//           setLocation(defaultLocation);
//           setLoading(false);
//         }
//       } else {
//         // iOS
//         getCurrentLocation();
//       }
//     };

//     requestLocationPermission();
//   }, []);

//   const handleMapPress = (e: any) => {
//     const coordinate = e.nativeEvent.coordinate;
//     if (isChoosingSource) {
//       setSource(coordinate);
//       setIsChoosingSource(false);
//     } else if (isChoosingDestination) {
//       setDestination(coordinate);
//       setIsChoosingDestination(false);
//     }
//   };

//   const showCoordinates = () => {
//     if (source && destination) {
//       const distance =
//         getDistance(
//           { latitude: source.latitude, longitude: source.longitude },
//           { latitude: destination.latitude, longitude: destination.longitude },
//         ) / 1000; // Convert to kilometers
//       Alert.alert(
//         'Coordinates and Distance',
//         `Source: \nLatitude: ${source.latitude}, Longitude: ${
//           source.longitude
//         }\n\nDestination: \nLatitude: ${destination.latitude}, Longitude: ${
//           destination.longitude
//         }\n\nDistance between source and destination: ${distance.toFixed(
//           2,
//         )} kilometers`,
//       );
//     } else {
//       Alert.alert(
//         'Error',
//         'Please select both source and destination coordinates.',
//       );
//     }
//   };

//   const removeSource = () => {
//     setSource(null);
//   };

//   const removeDestination = () => {
//     setDestination(null);
//   };

//   const zoomToMarker = (marker: any) => {
//     if (mapRef.current && marker) {
//       (mapRef.current as any).animateToRegion({
//         latitude: marker.latitude,
//         longitude: marker.longitude,
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.05,
//       });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <View
//           style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//         >
//           <Text
//             style={{
//               color: '#e6eaf2',
//               fontWeight: '700',
//               marginBottom: 12,
//             }}
//           >
//             Loading Map Explore
//           </Text>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       ) : (
//         <>
//           <Text
//             style={{
//               color: '#e6eaf2',
//               fontWeight: '700',
//               marginBottom: 12,
//               position: 'absolute',
//               top: 20,
//               left: 20,
//               zIndex: 1,
//             }}
//           >
//             Map Explore
//           </Text>
//           <MapView
//             ref={mapRef}
//             style={styles.map}
//             showsUserLocation={true}
//             region={location}
//             onPress={handleMapPress}
//           >
//             {/* Render default markers */}
//             <Marker coordinate={location} />
//             {/* Render main markers */}
//             {source && (
//               <Marker
//                 coordinate={source}
//                 title={'Source'}
//                 description={'Your source location'}
//                 pinColor={'green'}
//                 onPress={() => zoomToMarker(source)}
//               />
//             )}
//             {destination && (
//               <Marker
//                 coordinate={destination}
//                 title={'Destination'}
//                 description={'Your destination location'}
//                 pinColor={'blue'}
//                 onPress={() => zoomToMarker(destination)}
//               />
//             )}
//             {source && destination && (
//               <Polyline
//                 coordinates={[source, destination]}
//                 strokeColor="#000"
//                 strokeWidth={2}
//               />
//             )}
//           </MapView>
//           <View style={styles.buttonContainer}>
//             <View style={styles.buttonGroup}>
//               {source ? (
//                 <Button title="Remove Source" onPress={removeSource} />
//               ) : (
//                 <Button
//                   title={
//                     isChoosingSource ? 'Please Choose Source' : 'Choose Source'
//                   }
//                   onPress={() => setIsChoosingSource(true)}
//                 />
//               )}
//               {destination ? (
//                 <Button
//                   title="Remove Destination"
//                   onPress={removeDestination}
//                 />
//               ) : (
//                 <Button
//                   title={
//                     isChoosingDestination
//                       ? 'Please Choose Destination'
//                       : 'Choose Destination'
//                   }
//                   onPress={() => setIsChoosingDestination(true)}
//                 />
//               )}
//             </View>
//             <Button title="Show Coordinates" onPress={showCoordinates} />
//           </View>
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
// });
