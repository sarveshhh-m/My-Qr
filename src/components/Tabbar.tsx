import React, { useMemo } from "react";
import { View, Pressable, Text } from "@gluestack-ui/themed";

const TabBar = React.memo(({ state, descriptors, navigation }: any) => {

    const routes = useMemo(() => state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                    ? options.title
                    : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };
        const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
        };

        if (route.name === 'Scanner') {
            return (
                <Pressable
                    elevation={2}
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    height={72}
                    width={72}
                    style={{
                        backgroundColor: '#5ba8ef',
                        marginBottom: 72,
                        borderRadius: 24,
                        transform: [{ rotate: '-45deg' }],
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text fontWeight='bold' color='black' transform={[{ rotate: '45deg' }]}>QR</Text>
                </Pressable>
            );
        }

        return (
            <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: 'center' }}>
                <Text fontSize={"$3xl"} style={{ color: isFocused ? '#fff' : '#aaa', fontSize: 12 }}>
                    {label}
                </Text>
            </Pressable>
        );
    }), [state.routes, descriptors, navigation]);

    return (
        <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height={72}
            backgroundColor='#121624'
            borderTopLeftRadius={"$xl"}
            borderTopRightRadius={"$xl"}
        >
            {routes}
        </View>
    );
});

export default TabBar;
