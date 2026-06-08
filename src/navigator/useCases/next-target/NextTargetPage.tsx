import { Layout, Logo } from '@design-system';
import { NavStripe } from './NavStripe';
import { useTargetGhost } from './useTargetGhost';

export const NextTargetPage = () => {
    const { data, isPending, isError, error } = useTargetGhost();

    return (
        <Layout>
            <NavStripe to="/">
                <Logo variant="xl" />
            </NavStripe>

            {isPending && <p>Loading...</p>}
            {isError && <p>{String(error)}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Layout>
    );
};
