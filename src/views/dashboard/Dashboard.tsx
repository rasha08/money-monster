import React, {FC, useEffect} from 'react';
import { Button, View, Text } from '@shoutem/ui';
import {useUserContext} from "../../context/user";
import {Welcome} from "./components/welcome/Welcome";

export const Dashboard = (props: any) => {
    const { isAuthenticated, logout } = useUserContext()

    if (!isAuthenticated()) {
        return <Welcome navigate={props.navigation.navigate} />
    }

  return (
    <View>
      <Text>DASHBOARD COMPONENT</Text>
      <Button title={'Auth'} onPress={logout}>
        <Text>LOGOUT</Text>
      </Button>
    </View>
  );
};
