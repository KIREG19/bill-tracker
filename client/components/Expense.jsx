import React from 'react';

const Expense = (props) => {

  return (
    <div className="expense">
      Expense{props.id + 1} : {props.expense}
    </div>
  );
}

export default Expense;