import { View, Text } from 'react-native';
import Button from '../../components/Button/Button';
import { stylesHome } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={stylesHome.homeContainer}>
      <Button theme="primary" label="Начать" onPress={() => navigation.navigate('Sprints')} />
      <Text style={stylesHome.homeText}>Новый спринт</Text>
    </View>
  );
};

export default HomeScreen;
