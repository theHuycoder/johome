import {Box, Tab} from "@mui/material"
import styled, {css} from "styled-components"
import {TabList} from "@mui/lab"

export const StyledQuickSearch = styled(Box)`
  ${({theme: {spacing}}) => css`
    padding: ${spacing(0, 5)};
    background: #FFFFFF;

    transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* Primary/5 */

    border: 1px solid #1BBB83;
    /* xl */

    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
    min-height: ${spacing(16)};
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const StyledTabList = styled(TabList)`
  ${() => css`
    & .MuiTabs-indicator {
      bottom: -2px;
      height: 4px;
    }
  `}
`

export const StyledTab = styled(Tab)`
  ${({theme: {palette}}) => css`
    text-transform: none;
    font-weight: 800;
    color: ${palette.common.black};

    &.Mui-selected {
      color: ${palette.primary.main};
    }
  `}
`
