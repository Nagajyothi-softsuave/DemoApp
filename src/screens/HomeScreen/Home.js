import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './style';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton';
import { useState } from 'react';
import TakeScreener from './TakeScreener';

export default function Home() {
  const [isScreener, setIsScreener] = useState(false);

  if (!isScreener) return <TakeScreener setIsScreener={setIsScreener}/>; 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView
        style={styles.body}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.question}>
          <Text style={styles.questionText}>1) Enter Your First Name</Text>
        </View>
        <CustomTextInput containerStyles={styles.Input} />

        <View style={styles.question}>
          <Text style={styles.questionText}>2) Enter Your Last Name</Text>
        </View>
        <CustomTextInput containerStyles={styles.Input} />

        <View style={styles.question}>
          <Text style={styles.questionText}>3) Enter Your Age</Text>
        </View>
        <CustomTextInput containerStyles={styles.Input} />
      </ScrollView>

      <View style={styles.bottomContainer}>
        <CustomButton label="Submit Answer" />
      </View>
    </KeyboardAvoidingView>
  );
}
