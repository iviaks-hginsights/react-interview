import * as React from "react";

import Table from "./components/Table";
import { Direction, Data } from "./models/data";

import { data as MOCK_DATA } from "./data";

type DirectionValue = keyof typeof Direction | "No selection";

interface Props {
  onChangeDirection: (direction: DirectionValue) => void;
  onChangeDistance: (options: { min?: number; max?: number }) => void;
}

const TableActions = (props: Props) => {
  const [distance, setDistance] = React.useState<{
    min?: number;
    max?: number;
  }>({});

  const onChangeDirection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeDirection(e.target.value as DirectionValue);
  };

  const onChangeDistance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    const updatedDistance = { ...distance, [name]: value };

    setDistance(updatedDistance);
    props.onChangeDistance(updatedDistance);
  };

  return (
    <div style={{ border: "1px solid #f00", padding: 10 }}>
      <div>
        <h1>Direction</h1>
        <select onChange={onChangeDirection}>
          <option value={undefined}>No selection</option>
          <option value={Direction.East}>{Direction.East}</option>
          <option value={Direction.South}>{Direction.South}</option>
          <option value={Direction.West}>{Direction.West}</option>
          <option value={Direction.East}>{Direction.East}</option>
        </select>
      </div>
      <div>
        <h1>Distance</h1>
        <input
          type="number"
          name="min"
          value={distance.min}
          onChange={onChangeDistance}
        />
        <input
          type="number"
          name="max"
          value={distance.max}
          onChange={onChangeDistance}
        />
      </div>
    </div>
  );
};

interface Filters {
  direction: DirectionValue;
  distance: {
    min?: number;
    max?: number;
  };
}

function App() {
  const [data, setData] = React.useState(MOCK_DATA);
  const [filters, setFilters] = React.useState<Filters>({
    direction: "No selection",
    distance: {},
  });

  function applyFilters(filters: Filters) {
    const { direction, distance } = filters;

    setData(
      MOCK_DATA.filter(
        (object: Data) =>
          direction === "No selection" || direction === object.direction
      ).filter((object: Data) => {
        if (distance.min !== undefined && distance.max !== undefined) {
          return (
            object.distance > distance.min && object.distance < distance.max
          );
        } else if (distance.min !== undefined) {
          return object.distance > distance.min;
        } else if (distance.max !== undefined) {
          return object.distance < distance.max;
        }

        return true;
      })
    );
  }

  function setDirectionFilters(value: DirectionValue) {
    const updatedFilters = { ...filters, direction: value };

    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  }

  function setDistanceFilters(options: { min?: number; max?: number }) {
    const { min, max } = options;
    const updatedFilters = { ...filters, distance: { min: min, max: max } };

    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  }

  return (
    <>
      <TableActions
        onChangeDirection={setDirectionFilters}
        onChangeDistance={setDistanceFilters}
      />
      <Table data={data} />
    </>
  );
}

export default App;
