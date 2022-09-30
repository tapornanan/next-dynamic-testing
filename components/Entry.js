import dynamic from 'next/dynamic'


const LazyComp = dynamic(() => import('./DynamicComp'))

const Entry = () => {
    return (
        <>
            <h4>This is entry point</h4>
            <LazyComp/>
        </>
    )
}

export default Entry