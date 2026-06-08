import { Stripe } from '@design-system';
import { type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = PropsWithChildren<{
    to: string;
    'aria-label'?: string;
}>;

export function NavStripe({
    children,
    to,
    'aria-label': ariaLabel = 'Home',
}: Props) {
    const navigate = useNavigate();

    const goTo = () => navigate(to);

    return (
        <div
            className="cursor-pointer [&>div]:transition-colors hover:[&>div]:bg-violet-500 active:[&>div]:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            onClick={goTo}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goTo();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={ariaLabel}
        >
            <Stripe>{children}</Stripe>
        </div>
    );
}
