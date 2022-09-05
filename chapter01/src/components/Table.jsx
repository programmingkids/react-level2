const TableBox = (props) => (
  <table className="my-table">
    <TableHeader />
    <tbody>
    {props.list.map((row, index) => <TableRow key={index} row={row} />)}
    </tbody>
  </table>
);

const TableHeader = () => (
  <thead>
    <tr>
      <th>項目</th>
      <th>入金</th>
      <th>出金</th>
      <th>残金</th>
    </tr>
  </thead>
);

const TableRow = (props) => {
  const {item, payment, amount, balance} = props.row;
  return (
    <tr>
      <td>{item}</td>
      <td>{payment === 'in' ? amount  : ''}</td>
      <td>{payment === 'out' ? amount  : ''}</td>
      <td>{balance}</td>
    </tr>
  );
};

export {
    TableBox,
    TableHeader,
    TableRow,
};
