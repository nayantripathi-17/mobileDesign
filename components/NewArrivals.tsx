import React from 'react'
import MiniProduct from './MiniProduct'
import { Grid } from '@mantine/core'


function NewArrivals() {
    return (
        <div className="mx-6 mt-6">
            <div className="flex flex-grow justify-between items-center">
                <h1 className="font-bold text-lg my-0">New Arrivals</h1>
                <p className="font-semibold text-xs text-[#666666] my-0">View All</p>
            </div>
            <Grid className="mt-2">
                <Grid.Col span={6}>
                    <MiniProduct src="/bag.png" alt="Shoe" title="The Marc Jacobs" subtitle="Traveler Tote" price="195" href="/product" />
                </Grid.Col>
                <Grid.Col span={6}>
                    <MiniProduct src="/shoe.png" alt="Shoe" title="Alex Arigato" subtitle="Clean 90 Triple Sneakers" price="245" href="/product" />
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default NewArrivals