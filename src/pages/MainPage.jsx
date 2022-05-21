import { Board } from "components/project/Board";
import { List } from "components/project/List";
import { ListBody } from "components/project/ListBody";
import { ListTitle } from "components/project/ListTitle";
import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1100px] px-2">
        <Board>
          <List>
            <ListTitle title="Backlog" color="sky" />
            <ListBody>Cards</ListBody>
          </List>
          <List>
            <ListTitle title="In Progress" color="yellow" />
            <ListBody>Card</ListBody>
          </List>
          <List>
            <ListTitle title="Completed" color="green" />
            <ListBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              modi eligendi quisquam quaerat doloribus reprehenderit odio ipsa
              repellendus assumenda similique suscipit adipisci, officia dicta!
              Eum deleniti laboriosam repellat hic dignissimos.
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
    </div>
  );
};
