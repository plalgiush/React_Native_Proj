import { View } from 'react-native';
import axios from './src/configs/axios';
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
    <View>
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
      <Button theme="primary" label="Подписать" />
    </View>
  );
};

export default Sprints;
