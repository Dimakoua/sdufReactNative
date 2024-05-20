import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

export default function DateTimePickerWidget({ data }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerMode, setDatePickerMode] = useState('date');
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        if (event.type === 'dismissed') {
            setShowPicker(false);
            setDatePickerMode('date');
            return;
        }

        setSelectedDate(selectedDate);
        setShowPicker(false);
        return;
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.selectDateTimeButton}
                onPress={() => setShowPicker(true)}
            >
                <Text style={styles.selectDateTimeButtonText}>{data.text}</Text>
                <Image source={{ uri: data.src }} style={styles.calendarIcon} />
            </TouchableOpacity>

            {showPicker &&
                <DateTimePicker
                    value={selectedDate}
                    mode={data.mode}
                    is24Hour={true}
                    display="spinner"
                    onChange={handleDateChange}
                    style={styles.dateTimePicker}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    dateTimePicker: {
        marginTop: 16,
        borderColor: '#ddd',
        borderRadius: 8,
        borderWidth: 1,
    },
    selectDateTimeButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    selectDateTimeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    calendarIcon: {
        width: 35,
        height: 35
    }
});