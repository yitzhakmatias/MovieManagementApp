"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import QueryProvider from "../providers/QueryProvider";
import theme from "../theme/theme";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryProvider>
          {children}
        </QueryProvider>
      </ThemeProvider>
      </body>
      </html>
  );
}
