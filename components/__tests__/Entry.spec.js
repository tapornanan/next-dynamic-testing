import { render } from '@testing-library/react'
import preloadAll from 'jest-next-dynamic'
import Entry from '../Entry'

beforeAll(preloadAll)

describe('<Entry />', () => { 
    it('should render dynamic component', () => {

        const { debug } = render(<Entry/>)

        debug()

    })
 })