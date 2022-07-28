import React, {useMemo} from 'react';
import {useParams, useLocation} from 'react-router-dom'

import {Container} from './style';

export default function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search),[search]);

  console.log(params);
  console.log(queryParams.get('meuQueryParam'))

  return (
    <>
     <Container>
      <h1>Post Page</h1>
     </Container>
    </>
  )
}