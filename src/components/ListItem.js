import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate () {
    LayoutAnimation.easeInEaseOut();
  }

  // helper functions
  dispatchSelectLibraryAction (arg) {
    return () => this.props.selectLibrary(arg);
  }

  renderDescription () {
    const { libraryProp, expanded } = this.props;
    const { descriptionTextStyle } = styles;
    if (expanded) {
      return (
        <CardSection>
          <Text style={descriptionTextStyle}>
            {libraryProp.item.description}
          </Text>
        </CardSection>
      );
    }

  }

  render () {
    // console.log(this.props.selectedLibraryId);
    const { title, id } = this.props.libraryProp.item;
    const { titleTextStyle } = styles;
    // console.log(libraryProp);
    return (
      <TouchableWithoutFeedback
        onPress={this.dispatchSelectLibraryAction(id)}
      >
        <View>
          <CardSection>
            <Text style={ titleTextStyle }>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

const styles = {
  titleTextStyle: {
    fontSize: 20,
    paddingLeft: 20
  },
  descriptionTextStyle: {
    paddingLeft: 20,
    paddingRight: 20
  }
};

// use mapStateToProps whenever a component needs to consume application level state
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const expanded = state.selectedLibraryId === ownProps.libraryProp.item.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
