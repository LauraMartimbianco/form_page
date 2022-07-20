import './styles.css'

export default function TextArea ({placeholder, type, size }) {
    return (
        <div class='wrapper' style={{width: size}}>
            <textarea className='textarea_container' placeholder='Descreva suas experiências anteriores' rows={10}/>
        </div>     

    )

}

{/* <div class='container' style={{width: size}}>  */}
            // <p class='input_label'>{label}</p>
            // <input type={type} class="input_default" placeholder={placeholder}  />
        // </div>


