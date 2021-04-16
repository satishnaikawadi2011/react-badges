import { CSSProperties } from 'react';
import pickTextColorBasedOnBgColorAdvanced from '../utils/pickTextColorBasedOnBgColor';
import { BadgeProps } from './Badge/Badge';

export const getStyles = (props: BadgeProps) => {
	const badgeStyles: CSSProperties = {
		top:

				props.verticalAlignment === 'top' ? -3 :
				'auto',
		bottom:

				props.verticalAlignment === 'bottom' ? 0 :
				'auto',
		left:

				props.horizontalAlignment === 'left' ? -3 :
				'auto',
		right:

				props.horizontalAlignment === 'right' ? -3 :
				'auto',
		backgroundColor: props.bgColor,
		color: pickTextColorBasedOnBgColorAdvanced(props.bgColor, '#ffffff', '#000000')
	};
	return badgeStyles;
};
