import React from "react";

export default () => {
  return (
    <table className="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>type</th>
          <th>payload</th>
          <th>комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>"SET"</td>
          <td>Array</td>
          <td>Присваивает массиву A содержимое массива payload</td>
        </tr>
        <tr>
          <td>"REVERSE"</td>
          <td>undefined</td>
          <td>Числа в массиве становятся в обратном порядке</td>
        </tr>
      </tbody>
    </table>
  );
};
