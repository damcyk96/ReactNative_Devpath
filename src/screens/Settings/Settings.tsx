import React from 'react';
import {Platform, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/Card';

const Settings = () => {
  if (Platform.OS === 'android') {
    return (
      <SafeAreaView>
        <Card>
          <Text>{`${Platform.OS} is the best`}</Text>
        </Card>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Card>
        <Text>{`${Platform.OS} is bla bla bla`}</Text>
      </Card>
    </SafeAreaView>
  );
};

export default Settings;
