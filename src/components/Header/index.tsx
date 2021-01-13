import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'react-native-eva-icons';

const HeaderBar: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Icon name="menu" />
            </View>
            <View>
                <Text style={styles.title}>Title</Text>
            </View >
            <View>
                <Text style={styles.title}>Right</Text>
            </View>
        </View >
    )
}

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFBF00",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        color: '#fff'
    },
    left: {
        color: '#fff',
        width: 25,
        height: 25,
        overlayColor: "#ffffff"
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});