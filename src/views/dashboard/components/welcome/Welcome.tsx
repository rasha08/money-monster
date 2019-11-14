import React from "react";
import { Button, View, Text, Title, Divider } from "@shoutem/ui";

export const Welcome = ({ navigate }) => {
  return (
    <View>
      <Title>Welcome</Title>
      <Divider />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        posuere, metus at porttitor convallis, quam ex iaculis leo, ac maximus
        diam massa nec turpis. Praesent porttitor sed justo ac fermentum. Etiam
        vel sapien in elit consectetur auctor sit amet ut neque. Proin lacus
        dui, cursus vitae lorem ac, sagittis lobortis orci. Aliquam ac augue in
        odio imperdiet varius. Integer sed lectus ut ipsum accumsan imperdiet
        tempus quis diam.
      </Text>
        <Divider />
        <Button onPress={() => navigate('Auth')}><Text>Login or Register</Text></Button>
    </View>
  );
};
