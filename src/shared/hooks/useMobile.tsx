'use client';

import { useState, useEffect } from 'react';

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Define the mobile breakpoint (e.g., 'sm' in Tailwind is typically 640px, 'md' is 768px)
		// Match this to your project's Tailwind config
		const mobileQuery = window.matchMedia('(max-width: 768px)');

		const handleWindowSizeChange = () => {
			setIsMobile(mobileQuery.matches);
		};

		// Initial check
		handleWindowSizeChange();

		// Listen for changes
		mobileQuery.addEventListener('change', handleWindowSizeChange);

		// Cleanup
		return () => {
			mobileQuery.removeEventListener('change', handleWindowSizeChange);
		};
	}, []);

	return isMobile;
}
