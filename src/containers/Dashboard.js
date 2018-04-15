// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

export class Dashboard extends React.PureComponent {
  state = {

  };

  render() {
    return (
      <div>Hello</div>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
