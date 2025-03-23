import styles from '../app/styles/Home.module.css';

export default function Home() {
	return(
		<div>
			<div className={styles.container}></div>
				<h1>Hello</h1>
			<button className={styles.button}>Узнать больше</button>
		</div>
	);
}