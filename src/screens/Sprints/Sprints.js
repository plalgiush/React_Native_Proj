import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Button from '../../components/Button/Button';
import Input from '../../components/Field/Input.js';
import { stylesSprints } from './styles';
import { useEffect, useState } from 'react';
import CustomField from '../../components/Field/CustomField';
import { Field, Formik } from 'formik';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const Sprints = ({ navigation }) => {
  const [sprints, setSprints] = useState([]);
  const [newSprint, setNewSprint] = useState('');
  const insets = useSafeAreaInsets();

  function addSprint() {
    setSprints([...sprints, { id: Date.now(), title: newSprint, date: Date.now() }]);
    setNewSprint('');
  }

  function deleteSprint(id) {
    setSprints(sprints.filter((item) => item.id !== id));
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <Input style={stylesSprints.newSprint} value={newSprint} onChangeText={setNewSprint} placeholder="Новый спринт" />
        {/* <Formik
          initialValues={{
            title: '',
          }}
          onSubmit={(values) => console.log(values)}>
          {({ handleSubmit, isValid, values }) => (
            <>
              <Field component={CustomField} name="sprint"  placeholder="Новый спринт" />
              <Button theme="primary" label="Добавить спринт" onPress={addSprint} />
            </>
          )}
        </Formik> */}
        {sprints.map((item) => (
          <View key={item.id} style={stylesSprints.containerSprint}>
            <Text>{item.title}</Text>
            <FontAwesome
              name="trash"
              size={20}
              color="#000"
              style={stylesSprints.buttonIcon}
              onPress={() => deleteSprint(item.id)}
            />
          </View>
        ))}
        <Button theme="primary" label="Добавить спринт" onPress={addSprint} />
      </View>
    </SafeAreaProvider>
  );

  // return (
  //   <View style={stylesSprints.container}>
  //     {/* <SafeAreaView style={stylesSprints.containerr}>
  //       <FlatList
  //         data={data}
  //         renderItem={({ item }) => (
  //           <View key={item.id} style={stylesSprints.post}>
  //             <Text style={stylesSprints.title}>{item.reward}</Text>
  //           </View>
  //         )}
  //       />
  //     </SafeAreaView> */}

  //     <View style={stylesSprints.timeFrame}>
  //       <Text
  //         style={[
  //           stylesSprints.timeFrameTitle,
  //           { display: 'flex', justifyContent: 'space-between' },
  //         ]}>
  //         Старт: <Text style={stylesSprints.timeFrameDate}>03.01.23</Text>
  //       </Text>
  //       <Text
  //         style={[
  //           stylesSprints.timeFrameTitle,
  //           { display: 'flex', justifyContent: 'space-between' },
  //         ]}>
  //         Финиш: <Text style={stylesSprints.timeFrameDate}>06.01.23</Text>
  //       </Text>
  //     </View>
  //     <View style={stylesSprints.purposes}>
  //       <View style={stylesSprints.purpose}>
  //         <View>
  //           <Text style={stylesSprints.purposeTitle}>Цель 1 (развитие)</Text>
  //           <Text style={stylesSprints.purposeText}>Узнать о том, как продавать</Text>
  //         </View>
  //         <FontAwesome name="pencil" size={25} color="#fff" style={stylesSprints.buttonIcon} onPress={() => navigation.navigate('Purpose')} />
  //       </View>
  //       <View style={stylesSprints.purpose}>
  //         <View>
  //           <Text style={stylesSprints.purposeTitle}>Цель 2 (карьера)</Text>
  //         </View>
  //         <FontAwesome name="pencil" size={25} color="#fff" style={stylesSprints.buttonIcon} onPress={() => navigation.navigate('Purpose')} />
  //       </View>
  //       <View style={stylesSprints.purpose}>
  //         <View>
  //           <Text style={stylesSprints.purposeTitle}>Цель 3 (отношения)</Text>
  //         </View>
  //         <FontAwesome name="pencil" size={25} color="#fff" style={stylesSprints.buttonIcon} onPress={() => navigation.navigate('Purpose')} />
  //       </View>
  //     </View>
  //     <View style={stylesSprints.reward}>
  //       <Text style={stylesSprints.rewardTitle}>Награда за успех: </Text>
  //       <Text style={stylesSprints.rewardText}>Буду есть мороженое целый год, когда захочу</Text>
  //     </View>
  //     <Button theme="primary" label="Подписать" onPress={() => navigation.navigate('Signature')} />
  //   </View>
  // );
};

export default Sprints;
