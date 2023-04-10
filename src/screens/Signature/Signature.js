import { View, Text, Image } from 'react-native';
import Button from '../../components/Button/Button';
import { stylesSignature } from './styles';

const PlaceholderImage = require('../../assets/images/signature.svg');

const Signature = () => {
  const date = new Date().toLocaleString();  

  return (
    <View style={stylesSignature.signatureContainer}>
      <Image source={PlaceholderImage} style={stylesSignature.image} />
      <Text style={stylesSignature.signatureDate}>Дата: {date}</Text>
      <Button theme="primary" label="Поехали!" />
    </View>
  );
};

export default Signature;
