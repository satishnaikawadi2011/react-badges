import { CSSProperties } from 'react';

export const containerStyles: CSSProperties = {
	display: 'inline-flex',
	position: 'relative',
	flexShrink: 0,
	verticalAlign: 'middle'
};

export const rawBadgeStyles: CSSProperties = {
	height: '20px',
	display: 'flex',
	padding: '0 6px',
	zIndex: 1,
	position: 'absolute',
	flexWrap: 'wrap',
	fontSize: '0.75rem',
	minWidth: '20px',
	boxSizing: 'border-box',
	transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	alignItems: 'center',
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontWeight: 500,
	lineHeight: 1,
	alignContent: 'center',
	borderRadius: '10px',
	flexDirection: 'row',
	justifyContent: 'center'
};
