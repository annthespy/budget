import React from "react";
import Entry from "./Entry.js";

const Summary = ({
  entries,
  update,
  deleteEntry,
  getEntryByCategories,
  handleViewChange,
  switchToOriginalView,
}) => {
  return (
    <div className="summary">
      <h2
        className="summary-heading"
        onClick={() => {
          switchToOriginalView();
        }}
      >
        This is where your money goes
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th className="date">Date</th>
            <th className="description">Description</th>
            <th className="amount">Amount</th>
            <th className="transactionType">Debit/Credit</th>
            <th className="category">Category</th>
            <th className="accountName">Account</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <Entry
              entry={entry}
              key={entry._id}
              update={update}
              deleteEntry={deleteEntry}
              getEntryByCategories={getEntryByCategories}
              handleViewChange={handleViewChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
