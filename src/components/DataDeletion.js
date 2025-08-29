import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";

function DataDeletion() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Data Deletion Instructions
      </Typography>

      <Typography variant="body1" paragraph>
        If you have used our application and would like to request the deletion
        of your data, you can do so by contacting us directly.
      </Typography>

      <Typography variant="body1" paragraph>
        Please send an email to{" "}
        <strong>support@yourapp.com</strong> with the subject{" "}
        <em>"Data Deletion Request"</em>. We will process your request and delete
        your account and associated data from our systems within 7 business days.
      </Typography>

      <Typography variant="body1" paragraph>
        Alternatively, if you signed in using Google/Facebook, you can also
        remove our app’s access directly from your{" "}
        <Link
          href="https://myaccount.google.com/permissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Account Settings
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.facebook.com/settings?tab=applications"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Settings
        </Link>
        .
      </Typography>

      <Box mt={4}>
        <Typography variant="caption" color="text.secondary">
          Last updated: August 2025
        </Typography>
      </Box>
    </Container>
  );
}

export default DataDeletion;
