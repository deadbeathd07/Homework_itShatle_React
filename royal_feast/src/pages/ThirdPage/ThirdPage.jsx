import "./ThirdPage.scss";
import DATA from "../../DATA/DATA";
import shuffle from "../../functions/shuffle";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/selectors";
import { useState } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import {resetStore} from "../../store/store";
import { useDispatch } from "react-redux";

function ThirdPage() {
  const dispatch = useDispatch();

  const newData = shuffle([...DATA.decrees, ...DATA.main, ...DATA.alco]);

  const users = Array.from(useSelector(selectUsers));
  const [count, setCount] = useState(0);

  function handleClickChangeCount() {
    setCount(count + 1);
  }

  function exit() {
    dispatch(resetStore());
  }

  return (
    <div className="thirdPage">
      <div>
        {count < users.length ? (
          <Card
            key={count}
            name={users[count].name}
            exercise={newData[count].exercise}
            func={handleClickChangeCount}
          ></Card>
        ) : (
          setCount(0)
        )}
      </div>
      <Link to="/">
        <button type="button" onClick={exit}>
          exit
        </button>
      </Link>
    </div>
  );
}

export default ThirdPage;
