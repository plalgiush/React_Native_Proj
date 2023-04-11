import { View, Text } from 'react-native';
import Button from '../../components/Button/Button';
import { stylesPurpose } from './styles';

const Purpose = ({ navigation }) => {
  return (
    <View style={stylesPurpose.purposeContainer}>
      <View style={stylesPurpose.purposes}>
        <View style={stylesPurpose.purpose}>
          <Text style={stylesPurpose.purposeTitle}>Цель 1 (развитие)</Text>
          <Text style={stylesPurpose.purposeText}>Узнать о том, как продавать</Text>
        </View>
        <View style={stylesPurpose.purpose}>
          <Text style={stylesPurpose.purposeTitle}>Этапы</Text>
          <Text style={stylesPurpose.purposeText}></Text>
        </View>
        <View style={stylesPurpose.purpose}>
          <Text style={stylesPurpose.purposeTitle}>Почему для меня это важно?</Text>
          <Text style={stylesPurpose.purposeText}></Text>
        </View>
      </View>
      <Button theme="primary" label="Сохранить" onPress={() => navigation.navigate('Sprints')} />
    </View>
  );
};

export default Purpose;
