import './styles.css'

export default function Input ({placeholder, type, size, label, forId}) {
    return(
        <div class='input_container' style={{width: size}}> 
            <label class={forId ? 'input_label_file' :'input_label'}  for={forId}>{label}</label>
            <input type={type} class="input_default" placeholder={placeholder} id={forId}/>
        </div>
    )
}