import { Layout, Logo, Nav, NavItem, Stripe } from '@design-system';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const NextTargetPage = () => {
    useEffect(() => {
        console.log('API_BASE_URL>>', API_BASE_URL);
    }, []);

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
