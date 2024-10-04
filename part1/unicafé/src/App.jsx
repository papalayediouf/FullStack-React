import React, { useState } from 'react';

// Composant pour afficher une ligne de statistique
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// Composant pour les boutons de feedback
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// Composant Statistics affichant les statistiques dans un tableau
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positivePercentage = total ? (good / total) * 100 : 0;

  if (total === 0) {
    return <p>Aucune statistique disponible.</p>;
  }

  return (
    <div>
      <h2>Statistiques</h2>
      <table>
        <tbody>
          <StatisticLine text="Bon" value={good} />
          <StatisticLine text="Neutre" value={neutral} />
          <StatisticLine text="Mauvais" value={bad} />
          <StatisticLine text="Nombre total de retours" value={total} />
          <StatisticLine text="Note moyenne" value={average.toFixed(2)} />
          <StatisticLine text="Pourcentage de bons retours" value={`${positivePercentage.toFixed(2)} %`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Unicafé</h1>
      <Button handleClick={() => setGood(good + 1)} text="Bon" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutre" />
      <Button handleClick={() => setBad(bad + 1)} text="Mauvais" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
