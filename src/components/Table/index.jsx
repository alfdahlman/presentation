import classes from "./Table.module.css";

const Table = ({ rows }) => {
  const [thead, ...tbody] = rows;

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.tr}>
          {thead.map((c, i) => (
            <th className={classes.th} key={i}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, i) => (
          <tr key={i} className={classes.tr}>
            {row.map((c, i) => (
              <td key={i} className={classes.td}>
                <small className={classes.thSm}>{thead[i]}</small>
                <div>{c}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
