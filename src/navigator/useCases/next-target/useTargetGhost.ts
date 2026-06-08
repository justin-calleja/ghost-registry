import { useQuery } from '@tanstack/react-query';
import { ghostApi, type GhostApi } from '../../../api/ghostApi.ts';
import { ghostQueryKeys } from '../../../api/ghostQueryKeys.ts';

export function useTargetGhost(api: GhostApi = ghostApi) {
    return useQuery({
        queryKey: ghostQueryKeys.target,
        queryFn: () => api.getTarget(),
    });
}
