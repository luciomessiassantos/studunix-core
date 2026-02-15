import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { RelativePathString, router, usePathname } from 'expo-router';
import variables, { flexCol, flexRow } from '@/shared/utils/styleVariables';

export type SubTab = {
  name: string, path: string, label: string
}

type SubTabBarNavigationProps = {
  ROUTES: SubTab[]
}


export default function TabsNavigation({
  ROUTES
}: SubTabBarNavigationProps) {
    const pathname = usePathname();
    const [screen, setScreen] = useState<number>(Dimensions.get("window").width);
    const TAB_WIDTH = screen / ROUTES.length - 100;


    const translateX = useRef(new Animated.Value(0)).current;
    const activeIndex = ROUTES.findIndex(r => r.path === pathname);

  useEffect(() => {
    if (activeIndex === -1) return;

    Animated.spring(translateX, {
      toValue: activeIndex * TAB_WIDTH,
      useNativeDriver: true,
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    }).start();
  }, [activeIndex]);



        return (
      <Animated.View 
      style={{
        height: 60,
        marginTop: 60, width: "100%",
        backgroundColor: variables.colors["bg"],
        paddingHorizontal: 20,
        ...flexCol, alignItems: 'flex-start'
      }}
        >

        <View style={{ ...flexRow, justifyContent: 'flex-start', }}>
        {ROUTES.map((route) => {
          const isActive = pathname === route.path;

          return (
            <TouchableOpacity
              key={route.name}
              onPress={() => router.push(route.path as RelativePathString)}
              style={{
                width: TAB_WIDTH,
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: isActive
                    ? variables.colors["primary"]
                    : "#000",
                  fontWeight: isActive ? "600" : "400",
                }}
              >
                {route.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Animated.View
        style={{
          height: 2,
          width: TAB_WIDTH * 0.5,
          backgroundColor: variables.colors["primary"],
          borderRadius: 2,
          transform: [
            {
              translateX: Animated.add(
                translateX,
                new Animated.Value(TAB_WIDTH * 0.25)
              ),
            },
          ],
        }}
      />
      </Animated.View>
        )
      }