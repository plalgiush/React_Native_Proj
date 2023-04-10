import { View, Text } from 'react-native';
import axios from '../../../src/configs/axios.js';
import Button from '../../components/Button/Button';
import { stylesSprints } from './styles';

const Sprints = () => {
  // const [data, setData] = useState([]);
  // const baseUrl = 'http://localhost';

  // const getPost = async () => {
  //   const url = `${baseUrl}/api/v1/sprints`;

  //   try {
  //     const response = await axios.get(url);
  //     console.log(response);
  //     if (response.status === 200) {
  //       console.log(response.data);
  //       setData(response.data);
  //       return;
  //     } else {
  //       throw new Error('Failed to fetch users');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (axios.isCancel(error)) {
  //       console.log('Data fetching cancelled');
  //     } else {
  //       setIsLoading(false);
  //     }
  //   }
  // };

  return (
    <View style={stylesSprints.container}>
      {/* <SafeAreaView style={stylesSprints.containerr}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View key={item.id} style={stylesSprints.post}>
              <Text style={stylesSprints.title}>{item.reward}</Text>
            </View>
          )}
        />
      </SafeAreaView> */}

      <View>
        <Text>Старт: 03.01.23</Text>
        <Text>Финиш: 06.03.23</Text>
      </View>
      <View>
        <Text>Цель 1 (развитие)</Text>
      </View>
      <View>
        <Text>Цель 2 (карьера)</Text>
      </View>
      <View>
        <Text>Цель 3 (отношения)</Text>
      </View>
      <View>
        <Text>Награда за успех: </Text>
      </View>
      <Button theme="primary" label="Подписать" />
    </View>
  );
};

export default Sprints;
