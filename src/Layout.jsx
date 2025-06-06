import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* Перенаправление по умолчанию на страницу генерации */}
        <Route
          path="/qr-code"
          element={<Navigate to="/qr-code/generate" replace />}
        />

        <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code/scan" element={<QrCodeScanner />} />
        <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
