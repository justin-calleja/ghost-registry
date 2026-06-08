import type { Ghost } from './ghost.types.ts';

export type Fetcher = typeof fetch;

type GetTargetDeps = {
    fetcher: Fetcher;
    baseUrl: string;
};

export async function getTarget({ fetcher, baseUrl }: GetTargetDeps): Promise<Ghost> {
    const res = await fetcher(`${baseUrl}/api/v1/target`);

    if (!res.ok) {
        throw new Error(`GET /api/v1/target failed: ${res.status}`);
    }

    return res.json() as Promise<Ghost>;
}
