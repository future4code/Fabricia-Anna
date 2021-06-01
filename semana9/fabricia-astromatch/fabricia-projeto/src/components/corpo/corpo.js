import React from 'react';
import Styled from 'styled-components';

const LayoutCorpo = Styled.div `
height: 45vh;
`

export default class CorpoHome extends React.Component {
    render() {
        return (
            <LayoutCorpo>Corpo</LayoutCorpo>
        );
    }
}