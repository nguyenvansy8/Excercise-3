import React from 'react';
import styled from 'styled-components';
import Top from './Top';
import Bottom from './Bottom';
import Center from './Center';

const Head = styled.div`

`

const Layout = () => {
    return (
        <>
            <Head>
                <Top />
                <Center />
                <Bottom />
            </Head>
        </>
  )
}

export default Layout