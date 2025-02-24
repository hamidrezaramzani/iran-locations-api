import styled from 'styled-components';



export const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background: ${({ isDark }) => isDark ? '#000' : '#fff'};
    border-bottom: 1px solid #444;
    position: fixed;
    z-index: 9999;
    .header__app-bar {
        box-shadow: none;
        border-radius: 5px;
    }

    .desktop-menu {
        flex-grow: 1;
        font-size: 14px;
        gap: 15px;
        display: flex;
    }

    @media (max-width: 768px) {
        .mobile-menu {
            display: block !important;
        }
        .desktop-menu {
            display: none;
        }
        .desktop-theme {
            display: none;
        }
    }

    .mobile-menu {
         display: none;
    }  

`;