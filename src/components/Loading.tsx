import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading = ({loading}: {loading: boolean}) => {
  return <Spinner visible={loading} />;
};

export default Loading;
