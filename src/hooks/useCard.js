import {
  createCard,
  deleteCard,
  getCards,
  updateCardStatus,
} from "api/queries/card";

import { useMutation, useQuery, useQueryClient } from "react-query";

const key = "cards";

export const useCreteCard = () => {
  return useMutation(createCard);
};

export const useUpdateCardStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCardStatus, {
    onMutate: async (updatedCard) => {
      await queryClient.cancelQueries([key]);

      const previousCards = queryClient.getQueryData([key]);

      const cardFound = previousCards.find(
        (card) => card._id === updatedCard.cardId
      );

      queryClient.setQueriesData([key], (oldCards) => [
        ...oldCards.filter((card) => card._id !== updatedCard.cardId),
        {
          ...cardFound,
          status: updatedCard.status,
        },
      ]);
      return { previousCards };
    },

    onError: (err, updatedCard, context) => {
      queryClient.setQueryData([key], context.previousCards);
    },

    onSettled: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};

export const useDeleteCard = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCard, {
    onMutate: async (deletedCard) => {
      await queryClient.cancelQueries([key]);

      const previousCards = queryClient.getQueryData([key]);

      queryClient.setQueriesData([key], (oldCards) => [
        ...oldCards.filter((card) => card._id !== deletedCard.cardId),
      ]);
      return { previousCards };
    },

    onError: (err, deletedCard, context) => {
      queryClient.setQueryData([key], context.previousCards);
    },

    onSettled: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};

export const useCards = () => {
  return useQuery([key], () => getCards(), {
    refetchOnWindowFocus: false,
  });
};
