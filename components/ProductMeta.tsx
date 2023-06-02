import { ActionIcon, NumberInput, NumberInputHandlers, Rating } from '@mantine/core'
import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { productsState } from '../atoms/productAtoms'

function ProductMeta() {
    const [product, setProduct] = useRecoilState(productsState("id_1"))

    const handlers = useRef<NumberInputHandlers>();
    return (
        <div className="flex flex-grow justify-between">
            <div>
                <h1 className="text-lg leading-8 font-semibold">{product.name}</h1>
                <p className="text-xs leading-6 text-[#666666]">{product.metaDescription}</p>
                <div className="flex mt-2 space-x-1 items-center">
                    <Rating size="sm" value={product?.rating} onChange={(e) => setProduct({ ...product, rating: e })} fractions={2} readOnly />
                    <p className="text-xs">{`(${product.reviews} Reviews)`}</p>
                </div>
            </div>
            <div className="flex items-center bg-[#EEEEEE] rounded-[30px] h-fit px-4">
                <ActionIcon size={10} variant="" onClick={() => { handlers.current && handlers.current.decrement() }}>
                    -
                </ActionIcon>
                <NumberInput
                    type="number"
                    hideControls
                    value={product.quantity}
                    onChange={(e) => setProduct({ ...product, quantity: e })}
                    handlersRef={handlers}
                    max={10}
                    min={1}
                    step={1}
                    classNames={{
                        root: "mx-0 px-0",
                        input: "text-center border-0 mx-0 px-0 bg-[#EEEEEE] w-8"
                    }}

                />
                <ActionIcon size={10} variant="" onClick={() => { handlers.current && handlers.current.increment() }}>
                    +
                </ActionIcon>
            </div>
        </div>
    )
}

export default ProductMeta