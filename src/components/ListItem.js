import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { CardSection } from './common';

class ListItem extends Component {

  render () {
    const { libraryProp } = this.props;
    const { titleTextStyle, titleContainerStyle } = styles;
    console.log(libraryProp);
    return (
      <CardSection>
        <View style={titleContainerStyle}>
          <Text style={ titleTextStyle }>
            {libraryProp.item.title}
          </Text>
        </View>
      </CardSection>
    );
  }

}

const styles = {
  titleTextStyle: {
    fontSize: 20
  },
  titleContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export default ListItem;
