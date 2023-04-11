import { View, Text, Image } from 'react-native';
import Button from '../../components/Button/Button';
import { stylesSignature } from './styles';

const PlaceholderImage = require('../../assets/images/signature.png');

const Signature = ({ navigation }) => {
  const date = new Date().toLocaleString();

  return (
    <View style={stylesSignature.signatureContainer}>
      <Image source={PlaceholderImage} style={stylesSignature.image} />
      <Text style={stylesSignature.signatureDate}>Дата: {date}</Text>
      <Button theme="primary" label="Поехали!" onPress={() => navigation.navigate('Sprints')} />
    </View>
  );
};

export default Signature;
