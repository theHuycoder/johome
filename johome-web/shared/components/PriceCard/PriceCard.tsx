import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

type PriceCardProps = {
 price: number;
 title: string;
};

export default function PriceCard({ price, title }: PriceCardProps) {
 return (
  <Card>
   <CardContent>
    <Typography color="primary.900" variant="h1">
     {title}
    </Typography>
    <Typography color="secondary.main">{price}</Typography>
   </CardContent>
  </Card>
 );
}
