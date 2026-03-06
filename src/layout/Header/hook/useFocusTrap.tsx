import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for managing focus trap in modal/overlay components
 *
 * Implements WCAG 2.4.3: Focus Order - ensures focus moves in a meaningful sequence
 * Implements WCAG 2.1.2: No Keyboard Trap - provides escape mechanism
 *
 * @param isActive - Whether the focus trap is currently active
 * @param onEscape - Callback to execute when Escape key is pressed
 */
export function useFocusTrap(isActive: boolean, onEscape?: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Get all focusable elements within the container
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
    ).filter((el) => el.offsetParent !== null); // Filter out hidden elements
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive) return;

      // Handle Escape key
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape?.();
        return;
      }

      // Handle Tab key for focus trapping
      if (event.key === "Tab") {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Shift + Tab: move focus backwards
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: move focus forwards
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [isActive, onEscape, getFocusableElements],
  );

  // Set up focus trap when active
  useEffect(() => {
    if (isActive) {
      // Store the currently focused element to restore later
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus the first focusable element in the container
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        // Small delay to ensure the container is rendered
        requestAnimationFrame(() => {
          focusableElements[0].focus();
        });
      }

      // Prevent body scroll when trap is active
      document.body.style.overflow = "hidden";

      // Add keyboard event listener
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (isActive) {
        // Restore body scroll
        document.body.style.overflow = "";

        // Remove keyboard event listener
        document.removeEventListener("keydown", handleKeyDown);

        // Restore focus to the previously focused element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      }
    };
  }, [isActive, handleKeyDown, getFocusableElements]);

  return containerRef;
}
