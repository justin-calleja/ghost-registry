import { Layout, Logo, Nav, NavItem, Stripe } from '@design-system';
import { Link } from 'react-router-dom';

export const NextTargetPage = () => {
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
        </Layout>
    );
};
