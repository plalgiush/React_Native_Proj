import { StyleSheet } from 'react-native';

export const stylesSprints = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
