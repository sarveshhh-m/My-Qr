import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Linking } from 'react-native';
import { Modal, Button, ButtonText } from '@gluestack-ui/themed';

const Scanner = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [link, setLink] = useState('');

    const handleScan = (e) => {
        setLink(e.data);
        setModalVisible(true);
    };

    const handleSave = () => {
        // Handle save logic here
        setModalVisible(false);
    };

    const handleNavigate = () => {
        Linking.openURL(link).catch((err) => console.error('An error occurred', err));
        setModalVisible(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <QRCodeScanner
                cameraContainerStyle={{ flex: 1 }}
                onRead={handleScan}
                flashMode={"off"}
            />
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Scan result: {link}</Text>
                    <Button onPress={handleSave} >
                        <ButtonText>Save</ButtonText>
                    </Button>
                    <Button onPress={handleNavigate} >
                        <ButtonText>Open</ButtonText></Button>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 16,
    },
});

export default Scanner;