// app/layout.jsx
import ClientWrapper from './components/ClientWrapper';
import './globals.css';
import { Providers } from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientWrapper>{children}</ClientWrapper>
        </Providers>
      </body>
    </html>
  );
}
