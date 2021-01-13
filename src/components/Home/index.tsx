import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Home: React.FC = () => {
    const src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";
    return (
        <View style={styles.container}>
            <Image source={{uri: src}} defaultSource={{ uri: src }} width={500} height={400} />
            <Text style={styles.label}>React Native</Text>
            <Text>This is Home Page.</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 40
    }
});
