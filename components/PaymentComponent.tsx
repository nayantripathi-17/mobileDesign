import { useState } from 'react'
import CardForm from './CardForm'
import { Button } from '@mantine/core'
import { FadeLoader } from 'react-spinners'

function PaymentComponent() {
    const [cardNumber, setCardNumber] = useState("")
    const [name, setName] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvv, setCvv] = useState("")
    const [cardNumberError, setCardNumberError] = useState("")
    const [nameError, setNameError] = useState("")
    const [expiryError, setExpiryError] = useState("")
    const [cvvError, setCvvError] = useState("")
    const [buttonLoading, setButtonLoading] = useState(false)
    const [stage, setStage] = useState(1) //1: enter card details, 2: processing, 3: payment successful

    //Used to format the card number
    const changeCardNumber = (value: string) => {
        //Remove all spaces and non-numeric characters
        const numbers = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
        //Split the string into parts of 4 characters each
        const parts = numbers.match(/.{1,4}/g)
        //Add a space after every part
        if (parts) {
            setCardNumber(parts.join(" "))
        } else {
            setCardNumber("")
        }
    }

    const changeExpirationDate = (value: string) => {
        //Remove all spaces and non-numeric characters
        const numbers = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
        //Split the string into parts of 2 characters each
        const parts = numbers.match(/.{1,2}/g)
        //Add a space after every part
        if (parts) {
            setExpiry(parts.join("/"))
        } else {
            setExpiry("")
        }
    }

    const changeCvv = (value: string) => {
        //Remove all spaces and non-numeric characters
        const numbers = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
        //Add a space after every part
        if (numbers.length <= 3) {
            setCvv(numbers)
        } else {
            setCvv("")
        }
    }

    const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Form submitted")
        setButtonLoading(true)
        //Prevent the form from submitting
        event.preventDefault()

        //Check if the card number is valid
        const cardRegex = /^[0-9]{4}\s+[0-9]{4}\s+[0-9]{4}\s+[0-9]{4}$/
        if (cardNumber.length !== 19 || !cardRegex.test(cardNumber)) {
            setCardNumberError("Invalid card number")
            setButtonLoading(false)
            return
        }
        setCardNumberError("")

        //Check if the expiry date is valid
        const expiryRegex = /^[0-12]{2}\/[0-9]{2}$/
        if (expiry.length !== 5 || !expiryRegex.test(expiry)) {
            setExpiryError("Invalid expiry date")
            setButtonLoading(false)
            return
        }
        const expiryDate = new Date(Number(`20${expiry.slice(3, 5)}`), Number(expiry.slice(0, 2)) - 1, 31)
        console.log(expiryDate)
        if (expiryDate < new Date(Date.now())) {
            setExpiryError("Card Expired")
            setButtonLoading(false)
            return
        }

        setExpiryError("")

        //Check if the cvv is valid
        const cvvRegex = /^[0-9]{3}$/
        if (cvv.length !== 3 || !cvvRegex.test(cvv)) {
            setCvvError("Invalid cvv")
            setButtonLoading(false)
            return
        }
        setCvvError("")

        //Check if the name is valid
        if (name.length < 1) {
            setNameError("Invalid name")
            setButtonLoading(false)
            return
        }
        setNameError("")
        setTimeout(() => {
            setButtonLoading(false)
            setStage(2)
            setTimeout(() => {
                setStage(3)
            }, 4000)
        }, 2500)

        return
    }

    return (
        <div className="flex min-h-screen flex-col">
            <div className="h-[45vh] w-full md:w-3/5 bg-[#FDF3F9] mx-auto my-auto px-10 py-6">
                {stage === 1 && <>
                    <CardForm
                        cardNumber={cardNumber}
                        name={name}
                        expiry={expiry}
                        cvv={cvv}
                        changeCardNumber={changeCardNumber}
                        setName={setName}
                        changeExpirationDate={changeExpirationDate}
                        changeCvv={changeCvv}
                        formSubmit={formSubmit}
                        cardNumberError={cardNumberError}
                        nameError={nameError}
                        expiryError={expiryError}
                        cvvError={cvvError}
                        buttonLoading={buttonLoading}
                    />
                </>
                }
                {stage === 2 &&
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="scale-75">
                            <FadeLoader
                                color="#757073"
                                width="2px"
                                height="15px"
                                margin="4px"
                            />
                        </div>
                        <p className="font-bold text-lg my-4 mb-2">Payment is processing...</p>
                        <p className="text-sm text-[#757073]">Pease wait, do not close this screen</p>
                    </div>
                }
                {stage === 3 &&
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className="fill-green-700">
                                <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
                            </svg>
                        </div>
                        <p className="font-bold text-lg my-4 mb-2 mx-auto">Payment received.</p>
                        <p className="text-sm text-[#757073] text-center mx-10">Your order is now on the way. Please check your email for the receipt.</p>
                    </div>
                }
            </div>
        </div >
    )
}

export default PaymentComponent