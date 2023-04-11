import { View, Text } from 'react-native';
import axios from '../../../src/configs/axios.js';
import Button from '../../components/Button/Button';
import { stylesSprints } from './styles';

const Sprints = ({ navigation }) => {
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

      <View style={stylesSprints.timeFrame}>
        <Text style={[stylesSprints.timeFrameTitle, { display: 'flex', justifyContent:'space-between' }]}>
          Старт: <Text style={stylesSprints.timeFrameDate}>03.01.23</Text>
        </Text>
        <Text style={[stylesSprints.timeFrameTitle, { display: 'flex', justifyContent:'space-between' }]}>
          Финиш: <Text style={stylesSprints.timeFrameDate}>06.01.23</Text>
        </Text>
      </View>
      <View style={stylesSprints.purposes}>
        <View style={stylesSprints.purpose}>
          <Text style={stylesSprints.purposeTitle}>Цель 1 (развитие)</Text>
          <Text style={stylesSprints.purposeText}>Узнать о том, как продавать</Text>
        </View>
        <View style={stylesSprints.purpose}>
          <Text style={stylesSprints.purposeTitle}>Цель 2 (карьера)</Text>
        </View>
        <View style={stylesSprints.purpose}>
          <Text style={stylesSprints.purposeTitle}>Цель 3 (отношения)</Text>
        </View>
      </View>
      <View style={stylesSprints.reward}>
        <Text style={stylesSprints.rewardTitle}>Награда за успех: </Text>
        <Text style={stylesSprints.rewardText}>Буду есть мороженое целый год, когда захочу</Text>
      </View>
      <Button theme="primary" label="Подписать" onPress={() => navigation.navigate('Signature')} />
    </View>
  );
};

export default Sprints;
