
// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import grid from 'easy-grid';
import './Dashboard.css';

const PlaidGrid = styled(grid`
    1fr   1fr   1fr   1fr   1fr
1fr A,H   A,I   A,J   A,K   A,L
1fr B,H   B,I   A,J   B,K   B,L
1fr C,H   C,I   C,J   C,K   C,L 
1fr D,H   D,I   D,J   D,K   D,L
1fr E,H   E,I   E,J   E,K   A,L
`)`
height: 1000px;
width: 1000px;
`;

const TwoByTwoLayout = grid`
    1fr   1fr
1fr A     A,B
1fr A     A,B
`;



export class Dashboard extends React.PureComponent {
  state = {

  };

  render() {
    return (
      <div class="wrapper">
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">Start</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DW</div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box">TL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">DL</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TW</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box">TL</div>

      </div>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
