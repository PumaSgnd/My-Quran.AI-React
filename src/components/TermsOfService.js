import React from "react";
import { Container, Typography, List, ListItem, Link } from "@mui/material";

const TermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Effective Date: August 27, 2025
      </Typography>

      <Typography paragraph>
        These Terms of Service ("Terms") govern your access to and use of the
        My-Quran.AI application and services ("Service"). By using the Service,
        you agree to be bound by these Terms.
      </Typography>

      {/* Section 1 */}
      <Typography variant="h5" gutterBottom>
        1. Use of the Service
      </Typography>
      <List>
        <ListItem>You must be at least 13 years old to use this Service.</ListItem>
        <ListItem>You agree to use the Service only for lawful purposes.</ListItem>
        <ListItem>
          Do not misuse, reverse engineer, or interfere with the Service or its
          security features.
        </ListItem>
      </List>

      {/* Section 2 */}
      <Typography variant="h5" gutterBottom>
        2. User Accounts
      </Typography>
      <List>
        <ListItem>
          You are responsible for maintaining the confidentiality of your login
          credentials.
        </ListItem>
        <ListItem>
          All activities that occur under your account are your responsibility.
        </ListItem>
      </List>

      {/* Section 3 */}
      <Typography variant="h5" gutterBottom>
        3. Intellectual Property
      </Typography>
      <Typography paragraph>
        All content, trademarks, logos, and materials provided by My-Quran.AI are
        the property of their respective owners and protected by applicable laws.
      </Typography>

      {/* Section 4 */}
      <Typography variant="h5" gutterBottom>
        4. Limitation of Liability
      </Typography>
      <Typography paragraph>
        We are not liable for any indirect, incidental, special, or consequential
        damages arising out of or in connection with the use of the Service.
      </Typography>

      {/* Section 5 */}
      <Typography variant="h5" gutterBottom>
        5. Changes to the Terms
      </Typography>
      <Typography paragraph>
        We may update these Terms from time to time. Continued use of the Service
        means you accept the updated Terms.
      </Typography>

      {/* Section 6 */}
      <Typography variant="h5" gutterBottom>
        6. Termination
      </Typography>
      <Typography paragraph>
        We reserve the right to suspend or terminate your access to the Service at
        any time, for any reason, without notice.
      </Typography>

      {/* Section 7 */}
      <Typography variant="h5" gutterBottom>
        7. Contact
      </Typography>
      <Typography>
        If you have any questions about these Terms, please contact us at:{" "}
        <Link href="mailto:Bomafirasuganda1@gmail.com">
          Bomafirasuganda1@gmail.com
        </Link>
      </Typography>
    </Container>
  );
};

export default TermsOfService;
