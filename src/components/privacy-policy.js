// PrivacyPolicy.js
import React from "react";
import { Container, Typography, List, ListItem, Link } from "@mui/material";

export default function PrivacyPolicy() {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                Effective Date: August 27, 2025
            </Typography>

            <Typography paragraph>
                Welcome to My-Quran.AI. We take your privacy seriously. This Privacy
                Policy explains how we collect, use, and protect your information.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Information We Collect
            </Typography>
            <List>
                <ListItem>Name</ListItem>
                <ListItem>Email address</ListItem>
                <ListItem>Login credentials via Facebook Login</ListItem>
            </List>

            <Typography variant="h6" gutterBottom>
                How We Use Your Information
            </Typography>
            <List>
                <ListItem>To authenticate users</ListItem>
                <ListItem>To personalize user experience</ListItem>
                <ListItem>To improve our services</ListItem>
            </List>

            <Typography variant="h6" gutterBottom>
                Data Security
            </Typography>
            <Typography paragraph>
                We use industry-standard security to protect your data. However, no
                method of transmission over the internet is 100% secure.
            </Typography>

            <Typography variant="h6" gutterBottom>
                User Rights
            </Typography>
            <Typography paragraph>
                You have the right to access, update, or delete your personal
                information.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Contact
            </Typography>
            <Typography>
                If you have any questions, please contact us at:{" "}
                <Link href="mailto:Bomafirasuganda1@gmail.com">
                    Bomafirasuganda1@gmail.com
                </Link>
            </Typography>
        </Container>
    );
}
