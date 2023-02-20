'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error() {
  return (
    <section className="main-content not-found">
      <p>Page Not Found!</p>
    </section>
  );
}
