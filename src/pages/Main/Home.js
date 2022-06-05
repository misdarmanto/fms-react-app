import React from "react";
import { Grid, Card } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={1}>
      {[1, 2, 3, 4, 5].map((data, index) => {
        return (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Room {data}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
