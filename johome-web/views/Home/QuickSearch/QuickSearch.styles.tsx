import { Box, Tab } from "@mui/material";
import styled, { css } from "styled-components";
import { TabList } from "@mui/lab";

export const StyledQuickSearch = styled(Box)`
 ${({ theme: { spacing } }) => css`
  padding: ${spacing(3.75, 5)};
  background: linear-gradient(
   30.13deg,
   #fcfcfd 14.92%,
   rgba(252, 252, 253, 0.83) 99.51%
  );
  background: linear-gradient(
   30.13deg,
   #fcfcfd 14.92%,
   rgba(252, 252, 253, 0.83) 99.51%
  );
  border: 1px solid #fcfcfd;
  /* xl */

  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
   0px 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
  min-height: ${spacing(31.75)};
  z-index: 50;
 `}
`;

export const StyledTabList = styled(TabList)`
 ${() => css`
  & .MuiTabs-indicator {
   bottom: -2px;
   height: 4px;
  }
 `}
`;

export const StyledTab = styled(Tab)`
 ${({ theme: { palette } }) => css`
  text-transform: none;
  font-weight: 800;
  color: ${palette.common.black};

  &.Mui-selected {
   color: ${palette.primary.main};
  }
 `}
`;
