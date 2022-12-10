import { useQueryClient } from '@tanstack/react-query';
import API from '@api/index';
import useMutation from '@hooks/useMutation';

function useCreateUserPrediction(category?: string) {
  const queryClient = useQueryClient();

  return useMutation(API.prediction.postUserPrediction, {
    onSuccess: () => {
      queryClient.invalidateQueries(['prediction', { category }]);
      queryClient.invalidateQueries(['user']);
    }
  });
}

export default useCreateUserPrediction;
