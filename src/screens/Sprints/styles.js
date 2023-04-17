import { StyleSheet } from 'react-native';

export const stylesSprints = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newSprint: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  containerSprint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 320,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    margin: 8,
  },
  timeFrame: {
    alignItems: 'start',
    maxWidth: 320,
    width: '100%',
  },
  timeFrameTitle: {
    width: '100%',
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  purposes: {
    alignItems: 'start',
    maxWidth: 320,
    width: '100%',
    marginTop: 50,
  },
  purpose: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
    marginBottom: 25,
  },
  purposeTitle: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  purposeText: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
  purposeIcon: {
    paddingRight: 8,
  },
  reward: {
    maxWidth: 320,
    marginTop: 50,
    marginBottom: 50,
  },
  rewardTitle: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  rewardText: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
});
