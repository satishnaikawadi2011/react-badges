import * as React from 'react';
import styles from './styles.module.css';
export { default as Badge } from './components/Badge/Badge';
interface Props {
	text: string;
}

export const ExampleComponent = ({ text }: Props) => {
	return <div className={styles.test}>Example Component Lassan: {text}</div>;
};
