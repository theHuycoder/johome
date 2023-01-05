import React, {PropsWithChildren} from "react";
import {Typography, TypographyProps, Box} from "@mui/material";
import styled, {css} from "styled-components";

export default function SectionTitle({
                                       children,
                                       variant = "h3",
                                       fontWeight = "800",
                                       lineHeight = "60px",
                                       color = "grey.800",
                                       emphasisShadow = false,
                                       emphasisContent,
                                       ...props
                                     }: PropsWithChildren<TypographyProps & { emphasisShadow?: boolean; emphasisContent?: string }>) {
  return (
    <Title
      variant={variant}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      emphasisShadow={emphasisShadow}
      emphasisContent={emphasisContent || children}
      {...props}
    >
      <span className="child">{children}</span>
    </Title>
  );
}

const Title = styled(({emphasisShadow, emphasisContent, ...props}) => (
  <Typography {...props} />
))`
  ${({theme: {palette}, emphasisShadow, emphasisContent = ""}: any) => css`
    position: relative;

    span.child {
      position: relative;
      z-index: 2;
      text-shadow: ${emphasisShadow
              ? `0px 0px 2px ${palette.common.white}`
              : "none"};
    }

    &::before {
      white-space: nowrap;
      content: "${emphasisContent}";
      display: ${emphasisShadow ? "block" : "none"};
      font-family: "Oswald", sans-serif;
      font-size: 101px;
      font-weight: 600;
      line-height: 112px;
      letter-spacing: -1.5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #E3F5ED;
      z-index: 0;
      text-transform: uppercase;
    }
  `}
`;
