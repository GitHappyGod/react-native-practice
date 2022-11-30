import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, Pressable, Button, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
    const onClick = useCallback(() => {
        navigation.navigate('Details');
    }, [navigation]);

    return (
        <>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange'}}>
                {/*
                Button 대신 TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Pressable(아이폰 안드로이드 동일하게) 도 요즘에 많이 사용함.
                웹과는 다르게 onClick 대신 onPress 사용해야함
                */}
                <TouchableHighlight underlayColor="yellow" onPress={onClick} style={{paddingVertical: 20, paddingHorizontal: 40, backgroundColor: "red"}}>
                    <Text style={{color: "white"}}>Home Screen</Text>
                </TouchableHighlight>
            </View>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow'}}>
                <TouchableHighlight onPress={onClick}>
                    <Text>Home Screen</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
    const onClick = useCallback(() => {
        navigation.navigate('Home');
    }, [navigation]);

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight onPress={onClick}>
                <Text>Details Screen</Text>
            </TouchableHighlight>
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Overview'}}
                />
                <Stack.Screen name="Details">
                    {props => <DetailsScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;