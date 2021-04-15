import colourNameToHex from './colorNameToHex';

export default function pickTextColorBasedOnBgColorAdvanced(
	backgroundColor = '#ffffff',
	lightColor = '#ffffff',
	darkColor = '#000000'
): string {
	const hexPattern = /^#[0-9a-f]{3,6}$/i;
	const rgbPattern = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
	const cssVarPattern = /var\(--[a-z A-Z 0-9 -_]+\)/;
	const isHex = hexPattern.test(backgroundColor);
	const isRGB = rgbPattern.test(backgroundColor);
	const isCssVar = cssVarPattern.test(backgroundColor);
	let bgColor;
	if (isCssVar) {
		var style = getComputedStyle(document.body);
		const varName = backgroundColor.trim().split('(')[1].split(')')[0];
		bgColor = style.getPropertyValue(varName);
	}
	else {
		bgColor = backgroundColor;
	}
	let r, g, b;
	if (isHex) {
		var color =

				bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) :
				bgColor;
		r = parseInt(color.substring(0, 2), 16); // hexToR
		g = parseInt(color.substring(2, 4), 16); // hexToG
		b = parseInt(color.substring(4, 6), 16); // hexToB
	}
	else if (isRGB) {
		const myArr = bgColor.trim().split(',');
		r = parseInt(myArr[0].split('(')[1].trim());
		g = parseInt(myArr[1].trim()[0]);
		b = parseInt(myArr[2].trim()[0]);
	}
	else {
		const nameToHex = colourNameToHex(bgColor).toString();
		var color2 =

				nameToHex.charAt(0) === '#' ? nameToHex.substring(1, 7) :
				nameToHex;
		r = parseInt(color2.substring(0, 2), 16); // hexToR
		g = parseInt(color2.substring(2, 4), 16); // hexToG
		b = parseInt(color2.substring(4, 6), 16); //
	}
	var uicolors = [
		r / 255,
		g / 255,
		b / 255
	];
	var c = uicolors.map((col) => {
		if (col <= 0.03928) {
			return col / 12.92;
		}
		return Math.pow((col + 0.055) / 1.055, 2.4);
	});
	var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
	const finalColor =

			L > 0.179 ? darkColor :
			lightColor;
	return finalColor;
}
