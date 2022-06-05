import React from "react";
import { Grid, Card, Container, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import { useContextApi } from "../../lib/hooks/useContexApi";

const MyProfile = () => {
  const { currentUserData } = useContextApi()

  return (
    <Container maxWidth="sm" className="auth-layout">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card
            sx={{
              height: 200,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ textAlign: "center" }}>My Profile</h1>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={currentUserData?.email} />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={currentUserData?.userName}/>
              </ListItemButton>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProfile;
