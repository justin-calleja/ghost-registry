import { Layout, Logo, Nav, NavItem, Stripe } from '@design-system';
import { Link } from 'react-router-dom';
import { useTargetGhost } from './useTargetGhost';

export const NextTargetPage = () => {
    const { data, isPending, isError, error } = useTargetGhost();

    return (
        <Layout>
            <Stripe>
                <Logo variant="xl" />
            </Stripe>
            <Nav>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
            </Nav>

            {isPending && <p>Loading...</p>}
            {isError && <p>{String(error)}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Layout>
    );
};
