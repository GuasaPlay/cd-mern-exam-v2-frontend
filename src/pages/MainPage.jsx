import { Board } from "components/project/Board";
import { Card } from "components/project/Card";
import { List } from "components/project/List";
import { ListBody } from "components/project/ListBody";
import { ListTitle } from "components/project/ListTitle";
import { useCards } from "hooks/useCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const { data, isSuccess, isLoading } = useCards();
  const [backLogList, setBackLogList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const backlog = data.filter((card) => card.status === "BACKLOG");
      const inProgressList = data.filter(
        (card) => card.status === "IN_PROGRESS"
      );
      const doneList = data.filter((card) => card.status === "DONE");

      setBackLogList(backlog);
      setInProgressList(inProgressList);
      setDoneList(doneList);
    }
  }, [data, isSuccess]);

  return (
    <div>
      {isLoading && (
        <div className="mx-auto mt-20 max-w-[1100px] animate-bounce px-2 text-center text-2xl font-semibold text-slate-700">
          Loading...
        </div>
      )}
      {isSuccess && (
        <div className="mx-auto max-w-[1100px] px-2">
          <Board>
            <List>
              <ListTitle title="Backlog" color="sky" />
              <ListBody>
                {backLogList.map((card) => (
                  <Card key={card._id} card={card} />
                ))}
              </ListBody>
            </List>
            <List>
              <ListTitle title="In Progress" color="yellow" />
              <ListBody>
                {inProgressList.map((card) => (
                  <Card key={card._id} card={card} />
                ))}
              </ListBody>
            </List>
            <List>
              <ListTitle title="Completed" color="green" />
              <ListBody>
                {doneList.map((card) => (
                  <Card key={card._id} card={card} />
                ))}
              </ListBody>
            </List>
          </Board>
          <div className="mb-3 rounded-b-lg border-x-2 border-b-2 border-slate-400 bg-white px-3 py-2">
            <Link
              to="projects/new"
              className="flex items-center justify-center space-x-1 rounded-md bg-sky-200 px-2 py-1 font-semibold text-slate-700 transition-all hover:bg-sky-300 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Add new project</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
