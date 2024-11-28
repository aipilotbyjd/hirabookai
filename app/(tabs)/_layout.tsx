import { Tabs } from 'expo-router';
import { Platform, Image } from 'react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { TabBarIcon } from '../../components/TabBarIcon';
import { useRouter } from 'expo-router';
import { HeaderButton } from '../../components/HeaderButton';

const TAB_SCREENS = [
  {
    name: 'index',
    label: 'Home',
    icon: 'home',
    headerShown: true,
  },
  {
    name: 'reports',
    label: 'Reports',
    icon: 'log',
    headerShown: true,
  },
  {
    name: 'work-entry',
    label: 'Work Entry',
    icon: 'plus-circle',
    headerShown: true,
  },
  {
    name: 'payments',
    label: 'Payments',
    icon: 'credit-card',
    headerShown: true,
  },
  {
    name: 'account',
    label: 'Account',
    icon: 'person',
    headerShown: true,
  },
] as const;

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? SPACING.tabBarHeight.ios : SPACING.tabBarHeight.android,
          paddingBottom:
            Platform.OS === 'ios' ? SPACING.tabBarPadding.ios : SPACING.tabBarPadding.android,
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.gray[100],
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray[400],
        headerStyle: {
          backgroundColor: COLORS.white,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray[100],
        },
        headerTitleStyle: {
          display: 'none',
        },
        headerLeft: () => (
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/b9/f2/a6/b9f2a640b168cdb9f865185facee4cd3.png',
            }}
            style={{ width: 120, height: 30, marginLeft: 15 }}
            resizeMode="contain"
          />
        ),
        headerRight: () => (
          <>
            <HeaderButton onPress={() => router.push('/account')} />
          </>
        ),
      }}>
      {TAB_SCREENS.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.label,
            headerShown: screen.headerShown,
            tabBarIcon: ({ color }) => <TabBarIcon name={screen.icon} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
