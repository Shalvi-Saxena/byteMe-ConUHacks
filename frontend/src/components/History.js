import React from 'react'
import { constants } from '../constants';
import { withStyles } from '@mui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { transactionActions } from '../actions';
import { actions } from '../constants';
// import TransactionItem from './TransactionItem';

const styles = (theme) => ({

});


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: constants.TRANSACTION_TYPES.EXPENSE,
      transactions: [],
    }
    this.props.transactionActions(actions.REQUEST_TRANSACTIONS);
  }

  render() {
    const { transactions, type } = this.state;
  
    return <div>
      <h3>History</h3>
      {transactions.map(txn => (
        null
      ))}
    </div>
  }
}

const mapStateToProps = ({ transactions }) => {
  return {
    transactions,
  };
}

export default compose(
  connect(mapStateToProps, { transactionActions }),
  withStyles(styles, { withTheme: true })
)(History);
