import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';


import store from './src/publics/redux/store';

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Player from './src/screens/contents/Player';

// export default class App extends Component {
//   render() {
//     return <Player tracks={TRACKS} />
//   }
// }

// const tabNavigator = createBottomTabNavigator({

//   home : {

//   }

// })
// 

const AppNavigator = createStackNavigator({
    login : {
        screen : Login,
        navigationOption : {}
    },
    register : {
        screen : Register,
        navigationOption : {}
    },
    player : {
        screen : Player,
        navigationOption: {}
    }
})

const AppRoot = createAppContainer(AppNavigator);

export default class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppRoot />
            </Provider>
        )
    }
}