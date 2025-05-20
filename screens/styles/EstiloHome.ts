import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: '#E5731A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  loginText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default estilo;
