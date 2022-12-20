import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import PorukaForma from './PorukaForma'

test('<PorukaForma /> poziva onSubmit', () => {
    const stvoriPoruku = jest.fn() // neka lazna funkcija
    const komponenta = render(
        <PorukaForma spremiPoruku={stvoriPoruku}/>
    )

    const input = komponenta.container.querySelector('input')
    const forma = komponenta.container.querySelector('form')

    fireEvent.change(
        input, {
            'target' : 'testiranje forme'
        }
    )
    fireEvent.submit(forma)

    expect(stvoriPoruku.mock.calls).toHaveLength(1)
})