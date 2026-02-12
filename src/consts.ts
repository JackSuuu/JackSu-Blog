// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Jack Su Official™';
export const SITE_DESCRIPTION = 'A futuristic blog about technology and the digital frontier';

export const CATEGORIES = [
	'Algorithms',
	'Life',
	'Productivity',
	'Academic',
	'Technology'
] as const;

export type Category = typeof CATEGORIES[number];