import Styles from '../../styles/footer.module.css'
export default function footer() {
    return (
        <footer>
            <div className={Styles.author}>
                <p>Developed by Facundo Sanchez</p>
            </div>
            <div className={Styles.title__footer}>
                <p>Full Stack Developer</p>
            </div>
        </footer>
    )
}
