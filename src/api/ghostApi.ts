import type { Fetcher } from './getTarget.ts';
import { getTarget } from './getTarget.ts';
import type { Ghost } from './ghost.types.ts';

export type GhostApi = {
    getTarget: () => Promise<Ghost>;
};

export function createGhostApi(
    fetcher: Fetcher,
    baseUrl: string,
): GhostApi {
    return {
        getTarget: () => getTarget({ fetcher, baseUrl }),
    };
}

export const ghostApi = createGhostApi(
    fetch,
    import.meta.env.VITE_API_BASE_URL,
);
