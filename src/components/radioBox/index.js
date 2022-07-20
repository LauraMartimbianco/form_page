import './styles.css'

export default function RadioBox ({}) {
    return (
        <div className='container'>
            <label>Onde nos conheceu?</label>

            <div className='origin'>
                <input type="radio" value="LinkedIn" name="origin" /> <span>LinkedIn</span>
                <input type="radio" value="Instagram" name="origin" /> <span>Instagram</span>
                <input type="radio" value="Outro" name="origin" /> <span>Outro</span>
            </div>

        </div>
      );
}
