import {
    ButtonGroup,
    CheckIcon,
    ContentLayout,
    FormError,
    FormField,
    HeadingTitle,
    Layout,
    List,
    ListItem,
    Logo,
    SecondaryButton,
    Spinner,
} from '@design-system';
import { NavStripe } from './NavStripe';
import { useTargetGhost } from './useTargetGhost';

export const NextTargetPage = () => {
    const { data, isPending, isError, error } = useTargetGhost();

    return (
        <Layout>
            <NavStripe to="/">
                <Logo variant="xl" />
            </NavStripe>
            <ContentLayout>
                {isPending && <Spinner />}
                {isError && <FormError>{String(error)}</FormError>}
                {data && (
                    <>
                        <FormField label="Ghost name">
                            <HeadingTitle level={1} icon={<CheckIcon />} indent>
                                {data.name}
                            </HeadingTitle>
                        </FormField>
                        <List>
                            <ListItem label="ID" value={`#${data.id}`} />
                            <ListItem
                                label="Classification"
                                value={data.classification}
                            />
                            <ListItem
                                label="First seen"
                                value={data.firstSeen}
                            />
                        </List>
                        <ButtonGroup>
                            <SecondaryButton>Edit</SecondaryButton>
                        </ButtonGroup>
                    </>
                )}
            </ContentLayout>
        </Layout>
    );
};
