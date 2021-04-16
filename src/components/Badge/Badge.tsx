import React from 'react';
import { getStyles } from '../getStyles';
import { containerStyles, rawBadgeStyles } from './styles';
// import './styles.css';

export interface BadgeProps {
	content: string | number;
	bgColor?: string;
	max?: number;
	contentColor?: string;
	verticalAlignment?: 'top' | 'bottom';
	horizontalAlignment?: 'left' | 'right';
	hideZero?: boolean;
}

const Badge: React.FC<BadgeProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> = ({
	children,
	content,
	bgColor = 'teal',
	contentColor,
	max,
	style,
	className,
	verticalAlignment = 'top',
	horizontalAlignment = 'left',
	hideZero = false,
	...props
}) => {
	const isNumber =

			typeof content === 'number' ? true :
			false;
	let modifiedContent = content;
	if (isNumber && max) {
		modifiedContent =

				content > max ? `${max}+` :
				content;
	}
	const badgeStyles = getStyles({
		content,
		bgColor,
		contentColor,
		horizontalAlignment,
		max,
		hideZero,
		verticalAlignment
	});
	const hide = hideZero && modifiedContent === 0;
	return (
		<div className={`container`} style={containerStyles}>
			<div>{children}</div>
			{!hide && (
				<span
					className={`${className} badge`}
					style={{
						...rawBadgeStyles,
						...badgeStyles,
						...style
					}}
					{...props}
				>
					{modifiedContent}
				</span>
			)}
		</div>
	);
};

export default Badge;
