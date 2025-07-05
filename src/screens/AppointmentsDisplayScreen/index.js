import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import CustomText from '../../Components/CustomText';
import useAppTheme from '../../CustomHooks/useAppTheme';
import { format } from 'date-fns';
import ShowAppointmentAPI from '../../services/APIs/ShowAppointmentAPI';

const AppointmentDisplayScreen = ({ appointments }) => {
  const COLORS = useAppTheme();
  const styles = getStyles(COLORS);
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    ShowAppointmentAPI.fetchAppointmentAPI(res => {
      setAppointmentData(res.data);
    });
  }, []);

  const renderItem = ({ item }) => {
    const date = format(new Date(item.date), 'MMM dd, yyyy');
    const startTime = format(new Date(item.startTime), 'hh:mm a');
    const endTime = format(new Date(item.endTime), 'hh:mm a');
    const remindTime = format(new Date(item.remindTime), 'hh:mm a');

    return (
      <View style={styles.card}>
        <CustomText label={`📅 Date: ${date}`} style={styles.text} />
        <CustomText label={`🕒 Start: ${startTime}`} style={styles.text} />
        <CustomText label={`🕕 End: ${endTime}`} style={styles.text} />
        <CustomText label={`🔔 Remind At: ${remindTime}`} style={styles.text} />
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
     {appointmentData.length>0? <FlatList
        data={appointmentData}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />:<CustomText label='No appointments' />}
    </SafeAreaView>
  );
};

export default AppointmentDisplayScreen;

// Sample styles
const getStyles = COLORS =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS?.background || '#fff',
    },
    card: {
      backgroundColor: COLORS?.card || '#f0f0f0',
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      elevation: 2,
    },
    text: {
      fontSize: 16,
      marginBottom: 4,
      color: COLORS?.text || '#000',
    },
  });
