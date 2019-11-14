import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Screen, NavigationBar, Title, View, Spinner } from "@shoutem/ui";

import { AppNavigator } from "./src/navigation/Navigator";
import { CombinedContextProviders } from "./src/context";

import { rubikFonts } from "./src/shared/constants";

import { style } from "./styled";
import { PopUpBanner } from "./src/shared/components";

interface State {
  fontsLoaded: boolean;
}

class App extends Component<any, State> {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false
    };
  }

  componentDidMount = async (): Promise<void> => {
    await Font.loadAsync(rubikFonts);
    this.setState({ fontsLoaded: true });
  };

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <Screen style={style.screen}>
        <CombinedContextProviders>
          <NavigationBar
            centerComponent={
              <Title style={style.navigatorCenterComponent}>
                Money Monster
              </Title>
            }
            styleName="inline"
            style={{ container: style.navigatorContainer }}
          />
          <View style={style.view}>
            <PopUpBanner />
            <AppNavigator />
          </View>
        </CombinedContextProviders>
      </Screen>
    );
  }
}

export default App;
