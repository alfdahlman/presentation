import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

import classes from "./Cards.module.css";

const Cards = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");

  const fetchData = async () => {
    const response = await fetch("/presentation/assets/data.json");
    const data = await response.json();

    const uniqueMoods = [...new Set(data.map((e) => e.mood))];

    setMoods(uniqueMoods);
    setEmployees(data);
  };

  const onChange = ({ target }) => setSelectedMood(target.value);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = selectedMood
      ? employees.filter((employee) => employee.mood === selectedMood)
      : employees;

    setFilteredEmployees(filtered);
  }, [selectedMood, employees]);

  return (
    <div>
      <div className={classes.filter}>
        <label className={classes.label}>
          <select className={classes.select} onChange={onChange}>
            <option value="">Select mood</option>
            {moods.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </select>
          <HiChevronDown className={classes.icon} />
        </label>
      </div>
      <div className={classes.results}>
        {filteredEmployees.map(({ id, ...rest }) => (
          <Card key={id} {...rest} />
        ))}
      </div>
    </div>
  );
};

export const Card = ({ name, position, mood, image }) => (
  <div className={classes.card}>
    <div
      className={classes.picture}
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className={classes.textBox}>
      <p className={classes.pill}>{mood}</p>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.role}>{position}</p>
    </div>
  </div>
);

export default Cards;
