import dojoApi from "api";

export const getCards = async (params) => {
  const { data } = await dojoApi.get("/project/get-cards", { params });
  return data;
};

export const createCard = async (info) => {
  const { data } = await dojoApi.post("/project/create-card", info);
  return data;
};

export const updateCardStatus = async (info) => {
  const { status, cardId } = info;
  const params = { cardId };

  const { data } = await dojoApi.put(
    "/project/update-card-status",
    { status },
    {
      params,
    }
  );
  return data;
};

export const deleteCard = async (params) => {
  const { data } = await dojoApi.delete("/project/delete-card", { params });
  return data;
};
