import { Button, TextInput } from '@mantine/core'
import React from 'react'

function CardForm({
    cardNumber, changeCardNumber, name, setName, expiry, changeExpirationDate, cvv, changeCvv, cardNumberError, nameError, expiryError, cvvError, formSubmit, buttonLoading
}: {
    cardNumber: string,
    changeCardNumber: (value: string) => void,
    name: string,
    setName: (value: string) => void,
    expiry: string,
    changeExpirationDate: (value: string) => void,
    cvv: string,
    changeCvv: (value: string) => void,
    cardNumberError: string,
    nameError: string,
    expiryError: string,
    cvvError: string,
    formSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    buttonLoading: boolean
}) {
    return (
        <form onSubmit={formSubmit}>
            <div className="my-4">
                <p className="mb-1 text-sm">Card number</p>
                <TextInput
                    type="tel"
                    className="w-full"
                    classNames={{
                        input: "border border-black rounded-md text-black",
                        rightSection: "mr-2"
                    }}
                    pattern="[0-9]{4}\s+[0-9]{4}\s+[0-9]{4}\s+[0-9]{4}"
                    placeholder="XXXX XXXX XXXX XXXX"
                    maxLength={19}
                    minLength={19}
                    value={cardNumber}
                    onChange={(event) => changeCardNumber(event.currentTarget.value)}
                    required
                    error={cardNumberError}
                    name="cardNumber"
                    rightSection={
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path d="M 5 7 C 2.25 7 0 9.25 0 12 L 0 38 C 0 40.75 2.25 43 5 43 L 45 43 C 47.75 43 50 40.75 50 38 L 50 12 C 50 9.25 47.75 7 45 7 Z M 5 9 L 45 9 C 46.667969 9 48 10.332031 48 12 L 48 38 C 48 39.667969 46.667969 41 45 41 L 5 41 C 3.332031 41 2 39.667969 2 38 L 2 12 C 2 10.332031 3.332031 9 5 9 Z M 17 13 C 10.382813 13 5 18.382813 5 25 C 5 31.617188 10.382813 37 17 37 C 20.078125 37 22.875 35.816406 25 33.90625 C 27.125 35.816406 29.925781 37 33 37 C 39.617188 37 45 31.617188 45 25 C 45 18.382813 39.617188 13 33 13 C 29.925781 13 27.125 14.183594 25 16.09375 C 22.875 14.183594 20.078125 13 17 13 Z M 33 15 C 38.535156 15 43 19.464844 43 25 C 43 30.535156 38.535156 35 33 35 C 30.449219 35 28.109375 34.066406 26.34375 32.5 C 27.996094 30.441406 29 27.839844 29 25 C 29 22.160156 27.996094 19.558594 26.34375 17.5 C 28.109375 15.933594 30.449219 15 33 15 Z"></path>
                        </svg>
                    }

                />
            </div>
            <div className="my-4 text-sm">
                <p className="mb-1">Name on card</p>
                <TextInput
                    type="text"
                    className="w-full"
                    classNames={{
                        input: "border border-black rounded-md text-black"
                    }}
                    placeholder="Alan Wake"
                    value={name}
                    minLength={1}
                    onChange={(event) => setName(event.currentTarget.value)}
                    required
                    error={nameError}
                    name="name"
                />
            </div>
            <div className="flex my-4 space-x-2">
                <div className="text-sm">
                    <p className="mb-1">Expiration Date</p>
                    <TextInput
                        type="text"
                        className="w-full"
                        classNames={{
                            input: "border border-black rounded-md text-black"
                        }}
                        placeholder="MM/YY"
                        value={expiry}
                        pattern="[0-9]{2}/[0-9]{2}"
                        maxLength={5}
                        minLength={5}
                        onChange={(event) => changeExpirationDate(event.currentTarget.value)}
                        required
                        error={expiryError}
                        name="expiry"
                    />
                </div>
                <div className="text-sm">
                    <p className="mb-1">Security Code</p>
                    <TextInput
                        type="tel"
                        className="w-full"
                        classNames={{
                            input: "border border-black rounded-md text-black"
                        }}
                        placeholder="XXX"
                        pattern="[0-9]{3}"
                        maxLength={3}
                        minLength={3}
                        value={cvv}
                        onChange={(event) => changeCvv(event.currentTarget.value)}
                        required
                        error={cvvError}
                        name="cvv"
                    />
                </div>
            </div>
            <Button className="bg-[#BF477F] w-full flex items-center justify-center" loading={buttonLoading} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30">
                    <path fill="#fff" d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                </svg>
                <p className="text-xs ml-2">
                    Pay Now
                </p>
            </Button>
        </form>
    )
}

export default CardForm