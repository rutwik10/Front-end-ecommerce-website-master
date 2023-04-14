import React, { useRef } from 'react'
import './styles.css'

const Contact = () => {

    const titleRef = useRef('')
    const emailRef = useRef('')
    const mobileRef = useRef('')

    function submitHandler(event){
        event.preventDefault()

        const data = {
            title:titleRef.current.value,
            email:emailRef.current.value,
            mobile:mobileRef.current.value,
        }

        fetch('https://ecom-contact-default-rtdb.firebaseio.com/contacts.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response)
            // Reset the form after successful submission
        })
        .catch(error => {
            console.error(error)
        })

        event.currentTarget.reset()
    }


  return (
    <div className='contact'>
      <form className='formm' onSubmit={submitHandler}>
        <h1>Contact Us</h1>
        <div>
        <label htmlFor="name">Name :</label>
        <input type="text" ref={titleRef} />
        </div>
        <div>
        <label htmlFor="email">Email :</label>
        <input type="text" ref={emailRef} />
        </div>
        <div>
        <label htmlFor="number">Mobile No :</label>
        <input type="number" ref={mobileRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
