import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es-mx";

import { ButtonCard } from "./ButtonCard";
import { useDeleteCard, useUpdateCardStatus } from "hooks/useCard";
dayjs.locale("es-mx");
dayjs.extend(relativeTime);

export const Card = ({ card }) => {
  const { mutate } = useUpdateCardStatus();

  const changeStatus = (status) => {
    const info = {
      cardId: card._id,
      status,
    };
    mutate(info);
  };

  const { mutate: mutateDelete } = useDeleteCard();
  const deleteCard = () => {
    mutateDelete({ cardId: card._id });
  };

  return (
    <div className="rounded-lg border-2 border-slate-400 p-3">
      <h3 className="text-lg font-bold text-slate-700">{card.name}</h3>

      <div
        className="mt-2 flex space-x-2 text-sm font-medium text-slate-700"
        title={dayjs(card.due).format("DD/MM/YYYY HH:mm:ss")}
      >
        <strong>Due:</strong>
        {card.status !== "DONE" ? (
          <span>{dayjs(dayjs(card.due)).from(dayjs())}</span>
        ) : (
          <>
            {dayjs(card.due).isBefore(dayjs()) && card.status === "DONE" ? (
              <span className="jusce flex items-center rounded bg-gradient-to-r from-yellow-500 to-rose-500 px-2 leading-none text-white">
                Completed late
              </span>
            ) : (
              <span className="jusce flex items-center rounded bg-green-500 px-2 leading-none text-white">
                Completed
              </span>
            )}
          </>
        )}

        {dayjs(card.due).isBefore(dayjs()) && card.status !== "DONE" && (
          <div className="jusce flex items-center rounded bg-red-500 px-2 leading-none text-white">
            Past due
          </div>
        )}
        {/* Show if 1 day left to expire */}
        {dayjs(card.due).isSame(dayjs(), "day") && card.status !== "DONE" && (
          <div className="jusce flex items-center rounded bg-yellow-500 px-2 leading-none text-white">
            Due soon
          </div>
        )}
        {/* Show if completed late */}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-700">
        <strong>Creator:</strong> {card.creator.username}
      </div>
      <div className="mt-2">
        {card.status === "BACKLOG" && (
          <ButtonCard
            onClick={() => changeStatus("IN_PROGRESS")}
            name="Start Project"
            block
            bg="warning"
          />
        )}
        {card.status === "IN_PROGRESS" && (
          <ButtonCard
            onClick={() => changeStatus("DONE")}
            name="Move to completed"
            block
            bg="success"
          />
        )}
        {card.status === "DONE" && (
          <ButtonCard
            onClick={deleteCard}
            name="Remove Project"
            block
            bg="delete"
          />
        )}
      </div>
    </div>
  );
};
