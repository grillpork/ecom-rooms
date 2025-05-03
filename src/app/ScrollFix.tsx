'use client'
import { useLayoutEffect } from 'react'

export default function ScrollFix() {
  useLayoutEffect(() => {
    if (window.location.hash === "#contact" || "#room"|| "#services"|| "#about") {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
