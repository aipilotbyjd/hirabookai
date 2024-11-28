import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/ui/heading';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Heading>I am a Heading</Heading>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
