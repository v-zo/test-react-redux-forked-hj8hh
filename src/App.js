import React from "react";
import "./styles.css";
import ActionsTable from "./ActionsTable";

export default function App() {
  return (
    <div className="App">
      <h1>Задача</h1>
      <p>
        1. Подключить к данному приложению redux store в котором будет храниться
        массив A с числами. Редюсер обрабатывает 2 экшена:
      </p>
      <ActionsTable />
      <p>2. Отобразить на данной странице содержимое массива A в виде списка</p>
      <p>
        3. Отрендерить кнопку "PUSH ME" по нажатию на которую числа в массиве A
        становятся в обратном порядке.
      </p>
    </div>
  );
}
