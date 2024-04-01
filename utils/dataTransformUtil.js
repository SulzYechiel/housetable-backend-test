export function encodeDecodeUserData(dataPiece, operation) {
    if (operation === 'encryptForNoReason') {
      return { ...dataPiece, encoded: true };
    } else if (operation === 'decryptForNoReason') {
      return { ...dataPiece, decoded: true, lastAccessed: new Date().toISOString() };
    }
    return dataPiece; // Fallback
  }
  