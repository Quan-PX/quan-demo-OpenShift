import { Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { RouteRender } from '../../routes';

const TheContent = () => {
  return (
    <>
      <Container>
        <Suspense>
          <RouteRender />
        </Suspense>
      </Container>
    </>
  );
};

export default TheContent;
