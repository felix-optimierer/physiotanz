/*
 * ScrollToTop – scrolls to the top of the page on every route change.
 * Uses wouter's useLocation to detect navigation.
 */
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
