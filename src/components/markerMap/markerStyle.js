import styled from "styled-components";
import LogoMap from '../../img/logo.webp';

export const MarkerContainer = styled.div`
    background-image: url(${LogoMap});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;
